"use client";

import { motion } from "framer-motion";

export default function FloatingButtons() {
  const whatsappNumber = "966548920707";
  const phoneNumber = "0548920707";

  const pulse = {
    scale: [1, 1.08, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        zIndex: 1000,
      }}
    >
      {/* زر واتساب */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15 }}
        animate={pulse}
        style={{
          background:
            "linear-gradient(135deg, #0fe75eff 0%, #098778ff 100%)",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="white"
        >
          <path d="M4 24C4 12.95 12.95 4 24 4s20 8.95 20 20c0 4.56-1.55 8.76-4.13 12.1l2.52 7.9-8.14-2.49A19.87 19.87 0 0124 44C12.95 44 4 35.05 4 24zm20 16c3.38 0 6.54-1.12 9.13-3.06l.65-.48 4.84 1.49-1.5-4.69.44-.67A15.9 15.9 0 0040 24c0-8.82-7.18-16-16-16s-16 7.18-16 16 7.18 16 16 16z" />
          <path d="M19.8 14.5c-.3-.7-.6-.75-.88-.76h-.74a1.3 1.3 0 00-.93.43c-.3.32-1.24 1.21-1.24 2.95s1.27 3.41 1.45 3.65c.18.24 2.48 3.79 6 5.31 3.52 1.52 3.54 1.03 4.18.98.64-.05 2.07-.85 2.36-1.68.3-.83.3-1.55.21-1.69-.09-.14-.34-.23-.71-.4-.37-.18-2.21-1.08-2.55-1.2-.34-.12-.59-.18-.83.19-.24.37-.96 1.12-1.18 1.35-.22.23-.44.26-.81.09-.37-.17-1.58-.58-3.01-1.82-1.11-.98-1.86-2.19-2.08-2.55-.22-.36-.02-.56.17-.74.17-.17.37-.44.55-.66.18-.23.23-.37.34-.62.11-.25.06-.46-.03-.64-.09-.18-.82-1.99-1.13-2.73z" />
        </svg>
      </motion.a>

      {/* زر الاتصال */}
      <motion.a
        href={`tel:${phoneNumber}`}
        whileHover={{ scale: 1.15 }}
        animate={pulse}
        transition={{ delay: 0.4 }}
        style={{
          background:
            "linear-gradient(135deg, #FFD700 0%, #c66e04ff 100%)",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.38 21 3 13.62 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
        </svg>
      </motion.a>
    </div>
  );
}
