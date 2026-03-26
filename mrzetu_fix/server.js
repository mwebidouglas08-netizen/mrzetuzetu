const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ──
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Serve static files from /public ──
app.use(express.static(path.join(__dirname, 'public')));

// ── API: Booking ──
app.post('/api/book', (req, res) => {
  const { firstName, lastName, email, phone, session, date, time, level, goals } = req.body;
  if (!firstName || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Name, email and phone are required.' });
  }
  console.log('📅 NEW BOOKING:', { firstName, lastName, email, phone, session, date, time, level });
  res.json({
    success: true,
    message: `Booking received! Mr. ZetuZetu will contact you on WhatsApp at ${phone} within 24 hours.`,
    whatsappUrl: `https://wa.me/254704955242?text=${encodeURIComponent(
      `Hello Mr. ZetuZetu! I'd like to book a session.\n\n📋 *Booking Details*\n👤 Name: ${firstName} ${lastName}\n📧 Email: ${email}\n📱 Phone: ${phone}\n🗂 Session: ${session}\n📅 Date: ${date || 'Flexible'}\n🕐 Time: ${time}\n📊 Level: ${level}\n💬 Goals: ${goals || 'Not specified'}`
    )}`
  });
});

// ── API: Contact ──
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ success: false, message: 'Name and message are required.' });
  }
  console.log('📨 NEW INQUIRY:', { name, email, subject });
  res.json({
    success: true,
    message: 'Message received! We will get back to you within 24 hours.',
    whatsappUrl: `https://wa.me/254704955242?text=${encodeURIComponent(
      `Hello! I have an inquiry.\n\n👤 Name: ${name}\n📧 Email: ${email}\n📌 Subject: ${subject}\n💬 Message: ${message}`
    )}`
  });
});

// ── Health check ──
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'Mr. ZetuZetu Trading Site', time: new Date().toISOString() });
});

// ── Catch-all → serve index.html (SPA support) ──
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Mr. ZetuZetu site running on port ${PORT}`);
});
