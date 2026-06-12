export const WHATSAPP_NUMBER = "22892255522";
export const HOTEL_PHONE_DISPLAY = "+228 92 25 55 22";
export const HOTEL_EMAIL = "akanchan0202@gmail.com";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function roomInquiryMessage(roomType: string) {
  return `Hello Hotel Mokaa,
I am interested in booking a room.
Room Type: ${roomType}
Check-in: [Leave blank]
Check-out: [Leave blank]
Guests: [Leave blank]
Please confirm availability.`;
}

export function venueInquiryMessage(venue: string) {
  return `Hello Mokaa Residence Events Team,
I would like to inquire about venue rental.
Venue: ${venue}
Event Type: [Leave blank]
Expected Guests: [Leave blank]
Date: [Leave blank]
Please send availability and pricing.`;
}

export function tableReservationMessage(d: {
  name: string; phone: string; date: string; time: string; guests: string; notes: string;
}) {
  return `Table Reservation Request - Kanchan's Kitchen
-----------------------------------------------
Name: ${d.name}
Phone: ${d.phone}
Date: ${d.date}
Time: ${d.time}
Guests: ${d.guests}
Special Requests: ${d.notes}
-----------------------------------------------
Please confirm availability.`;
}

export function orderWhatsAppMessage(p: {
  items: { name: string; qty: number; price: number }[];
  total: number;
  orderType: "Delivery" | "Takeaway";
  name: string;
  phone: string;
  address?: string;
}) {
  const lines = p.items.map(i => `${i.name} x${i.qty} - ${i.price * i.qty} FCFA`).join("\n");
  return `NEW ORDER - Kanchan's Kitchen
--------------------------------
${lines}
--------------------------------
TOTAL: ${p.total} FCFA
Order Type: ${p.orderType}
Customer: ${p.name}
Phone: ${p.phone}${p.orderType === "Delivery" ? `\nAddress: ${p.address ?? ""}` : ""}
--------------------------------
Thank you!`;
}
