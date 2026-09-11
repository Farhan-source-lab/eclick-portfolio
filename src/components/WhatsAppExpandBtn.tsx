import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppExpandBtnProps {
  phone: string;
  label?: string;
}

export const WhatsAppExpandBtn: React.FC<WhatsAppExpandBtnProps> = ({
  phone,
  label = 'Send Hi',
}) => {
  const cleanNum = phone.replace(/[^\d]/g, '');
  const url = `https://wa.me/${cleanNum}?text=${encodeURIComponent(
    'Hi Eclick Tech Solutions, I would like to inquire about your services.'
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={`Chat on WhatsApp (${phone})`}
      className="group/wa relative inline-flex items-center gap-0 hover:gap-1.5 p-1.5 hover:px-3 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-300 ease-out shrink-0 cursor-pointer overflow-hidden"
    >
      <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
      <span className="max-w-0 opacity-0 group-hover/wa:max-w-[70px] group-hover/wa:opacity-100 transition-all duration-300 ease-out text-[11px] font-mono font-bold tracking-wider whitespace-nowrap overflow-hidden leading-none">
        {label}
      </span>
    </a>
  );
};
