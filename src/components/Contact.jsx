"use client"

import { useState, useRef, useEffect } from "react"
import { Send, MessageCircle, Mail, User, FileText, CheckCircle, Loader2 } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [sendMethod, setSendMethod] = useState("whatsapp") // 'whatsapp' or 'email'
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const formRef = useRef(null)

  // WhatsApp number - ganti dengan nomor Anda
  const WHATSAPP_NUMBER = "+6287760946560"
  // Email address - ganti dengan email Anda
  const EMAIL_ADDRESS = "achmadnazriel@gmail.com"

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format message
    const formattedMessage = `
*Pesan dari Portfolio Website*
━━━━━━━━━━━━━━━━━━━━
*Nama:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Pesan:*
${formData.message}
━━━━━━━━━━━━━━━━━━━━
    `.trim()

    setTimeout(() => {
      if (sendMethod === "whatsapp") {
        // Encode message untuk URL WhatsApp
        const encodedMessage = encodeURIComponent(formattedMessage)
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
        window.open(whatsappUrl, "_blank")
      } else {
        // Format untuk email
        const emailSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`)
        const emailBody = encodeURIComponent(
          `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`,
        )
        const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${emailSubject}&body=${emailBody}`
        window.location.href = mailtoUrl
      }

      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form setelah berhasil
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
      }, 3000)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 ">
      <div className="w-full max-w-4xl">
        {/* Header */}


        {/* Main Card */}
        <div
          ref={formRef}
          className={`relative bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-blue-500/5 dark:shadow-blue-500/10 border border-gray-200 dark:border-gray-800 transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl" />

          {/* Send Method Toggle */}
          <div
            className={`flex justify-center mb-8 transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="bg-gray-200 dark:bg-gray-800 p-1.5 rounded-2xl flex gap-2">
              <button
                type="button"
                onClick={() => setSendMethod("whatsapp")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  sendMethod === "whatsapp"
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => setSendMethod("email")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  sendMethod === "email"
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Input */}
              <div
                className={`group transition-all duration-700 delay-400 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nama Lengkap</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div
                className={`group transition-all duration-700 delay-500 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Subject Input */}
            <div
              className={`group transition-all duration-700 delay-600 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
              <div className="relative">
                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Tentang apa yang ingin dibahas?"
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div
              className={`group transition-all duration-700 delay-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Pesan</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tulis pesan Anda di sini..."
                className="w-full px-4 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div
              className={`transition-all duration-700 delay-800 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`relative w-full py-4 px-8 rounded-xl font-semibold text-white overflow-hidden group transition-all duration-500 ${
                  isSuccess
                    ? "bg-green-500"
                    : sendMethod === "whatsapp"
                      ? "bg-gradient-to-r from-green-500 to-green-600 hover:shadow-xl hover:shadow-green-500/30"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-xl hover:shadow-blue-500/30"
                } disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]`}
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <span className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Mengirim...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Terkirim!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span>Kirim via {sendMethod === "whatsapp" ? "WhatsApp" : "Email"}</span>
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>

          {/* Info Text */}
          <p
            className={`text-center text-sm text-gray-500 dark:text-gray-500 mt-6 transition-all duration-700 delay-900 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {sendMethod === "whatsapp"
              ? "Pesan akan dikirim langsung ke WhatsApp saya"
              : "Akan membuka aplikasi email default Anda"}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
              <MessageCircle className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
              <p className="font-medium text-gray-900 dark:text-white">+62 877-6094-6560</p>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="group flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
              <Mail className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="font-medium text-gray-900 dark:text-white">{EMAIL_ADDRESS}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
