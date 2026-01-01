import { createServer } from 'http'
import { Server as SocketIOServer } from 'socket.io'
import ZAI from 'z-ai-web-dev-sdk'

const PORT = 3003
const HTTP_PORT = 3004

// Create HTTP server for Socket.IO
const httpServer = createServer()
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

// Store connected clients
const connectedClients = new Map()

// Initialize ZAI SDK for advanced features
let zaiInstance
async function initZAI() {
  try {
    zaiInstance = await ZAI.create()
    console.log('✅ ZAI SDK initialized for notification service')
  } catch (error) {
    console.error('❌ Failed to initialize ZAI SDK:', error.message)
  }
}

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log(`🔗 Client connected: ${socket.id}`)
  
  // Store client info
  connectedClients.set(socket.id, {
    connectedAt: new Date(),
    lastActivity: new Date()
  })

  // Handle new contact form submission
  socket.on('new-contact', async (data) => {
    console.log('📧 New contact form submission:', data)
    
    // Broadcast to all connected admin clients
    io.emit('contact-notification', {
      type: 'new_contact',
      data: data,
      timestamp: new Date(),
      message: `Pesan baru dari ${data.name}`
    })

    // Optional: Generate AI-powered response suggestion
    if (zaiInstance) {
      try {
        const response = await zaiInstance.chat.completions.create({
          messages: [
            {
              role: 'system',
              content: 'Anda adalah asisten untuk perusahaan konstruksi IDAM KHALID. Buat respons profesional yang singkat untuk pesan pelanggan.'
            },
            {
              role: 'user',
              content: `Pelanggan dengan nama ${data.name} (${data.email}) mengirim pesan: "${data.message}". Buat respons balasan yang profesional.`
            }
          ]
        })

        const suggestion = response.choices[0].message.content
        socket.emit('response-suggestion', {
          suggestion: suggestion,
          originalMessage: data
        })
      } catch (error) {
        console.error('Error generating AI response:', error)
      }
    }
  })

  // Handle project status updates
  socket.on('project-update', (data) => {
    console.log('🏗️ Project update:', data)
    
    io.emit('project-notification', {
      type: 'project_update',
      data: data,
      timestamp: new Date(),
      message: `Update proyek: ${data.projectName}`
    })
  })

  // Handle admin connection
  socket.on('admin-connect', (data) => {
    console.log(`👨‍💼 Admin connected: ${socket.id}`)
    connectedClients.set(socket.id, {
      ...connectedClients.get(socket.id),
      isAdmin: true,
      adminInfo: data
    })
  })

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log(`❌ Client disconnected: ${socket.id}`)
    connectedClients.delete(socket.id)
  })

  // Handle keep-alive
  socket.on('ping', () => {
    connectedClients.set(socket.id, {
      ...connectedClients.get(socket.id),
      lastActivity: new Date()
    })
    socket.emit('pong')
  })
})

// Health check endpoint
httpServer.on('request', (req, res) => {
  if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      status: 'healthy',
      connectedClients: connectedClients.size,
      timestamp: new Date(),
      service: 'notification-service'
    }))
    return
  }

  // Default response
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Not Found')
})

// Cleanup inactive connections every 5 minutes
setInterval(() => {
  const now = new Date()
  const inactiveThreshold = 5 * 60 * 1000 // 5 minutes

  for (const [socketId, clientInfo] of connectedClients.entries()) {
    if (now - clientInfo.lastActivity > inactiveThreshold) {
      console.log(`🧹 Cleaning up inactive client: ${socketId}`)
      connectedClients.delete(socketId)
    }
  }
}, 5 * 60 * 1000)

// Start servers
async function startServers() {
  await initZAI()

  // Socket.IO server
  httpServer.listen(PORT, () => {
    console.log(`🚀 Notification service running on port ${PORT}`)
    console.log(`📊 Health check available at http://localhost:${PORT}/health`)
    console.log(`🔌 Socket.IO ready for connections`)
  })

  // Simple HTTP server for status
  createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      service: 'notification-service',
      status: 'running',
      socketPort: PORT,
      connectedClients: connectedClients.size,
      timestamp: new Date()
    }))
  }).listen(HTTP_PORT, () => {
    console.log(`📋 Status server running on port ${HTTP_PORT}`)
  })
}

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully')
  httpServer.close(() => {
    console.log('✅ Notification service stopped')
    process.exit(0)
  })
})

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully')
  httpServer.close(() => {
    console.log('✅ Notification service stopped')
    process.exit(0)
  })
})

// Start the service
startServers().catch(console.error)