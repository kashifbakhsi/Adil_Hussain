// // import {
// // //   Linkedin,
// //   Mail,
// //   MapPin,
// //   Phone,
// //   Send,
// // //   Twitch,
// // //   Twitter,
// // } from "lucide-react";
// // import { cn } from "@/lib/utils";
// // import { useToast } from "@/hooks/use-toast";
// // import { useState } from "react";

// // export const ContactSection = () => {
// //   const { toast } = useToast();
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     setIsSubmitting(true);

// //     setTimeout(() => {
// //       toast({
// //         title: "Message sent!",
// //         description: "Thank you for your message. I'll get back to you soon.",
// //       });
// //       setIsSubmitting(false);
// //     }, 1500);
// //   };
// //   return (
// //     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
// //       <div className="container mx-auto max-w-5xl">
// //         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
// //           Get In <span className="text-primary"> Touch</span>
// //         </h2>

// //         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
// //           Have a project in mind or want to collaborate? Feel free to reach out.
// //           I'm always open to discussing new opportunities.
// //         </p>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// //           <div className="space-y-8">
// //             <h3 className="text-2xl font-semibold mb-6">
// //               {" "}
// //               Contact Information
// //             </h3>

// //             <div className="space-y-6 justify-center">
// //               <div className="flex items-start space-x-4">
// //                 <div className="p-3 rounded-full bg-primary/10">
// //                   <Mail className="h-6 w-6 text-primary" />{" "}
// //                 </div>
// //                 <div>
// //                   <h4 className="font-medium"> Email</h4>
// //                   <a
// //                     href="mailto:hello@gmail.com"
// //                     className="text-muted-foreground hover:text-primary transition-colors"
// //                   >
// //                     hello@gmail.com
// //                   </a>
// //                 </div>
// //               </div>
// //               <div className="flex items-start space-x-4">
// //                 <div className="p-3 rounded-full bg-primary/10">
// //                   <Phone className="h-6 w-6 text-primary" />{" "}
// //                 </div>
// //                 <div>
// //                   <h4 className="font-medium"> Phone</h4>
// //                   <a
// //                     href="tel:+11234567890"
// //                     className="text-muted-foreground hover:text-primary transition-colors"
// //                   >
// //                     +1 (123) 456-7890
// //                   </a>
// //                 </div>
// //               </div>
// //               <div className="flex items-start space-x-4">
// //                 <div className="p-3 rounded-full bg-primary/10">
// //                   <MapPin className="h-6 w-6 text-primary" />{" "}
// //                 </div>
// //                 <div>
// //                   <h4 className="font-medium"> Location</h4>
// //                   <a className="text-muted-foreground hover:text-primary transition-colors">
// //                     Vancouver, BC, Canada
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="pt-8">
// //               <h4 className="font-medium mb-4"> Connect With Me</h4>
// //               <div className="flex space-x-4 justify-center">
// //                 {/* <a href="#" target="_blank">
// //                   <Linkedin />
// //                 </a> */}
// //                 {/* <a href="#" target="_blank">
// //                   <Twitter />
// //                 </a> */}
// //                 {/* <a href="#" target="_blank">
// //                   <Instagram />
// //                 </a> */}
// //                 {/* <a href="#" target="_blank">
// //                   <Twitch />
// //                 </a> */}
// //               </div>
// //             </div>
// //           </div>

// //           <div
// //             className="bg-card p-8 rounded-lg shadow-xs"
// //             onSubmit={handleSubmit}
// //           >
// //             <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

// //             <form className="space-y-6">
// //               <div>
// //                 <label
// //                   htmlFor="name"
// //                   className="block text-sm font-medium mb-2"
// //                 >
// //                   {" "}
// //                   Your Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="name"
// //                   name="name"
// //                   required
// //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
// //                   placeholder="Pedro Machado..."
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="email"
// //                   className="block text-sm font-medium mb-2"
// //                 >
// //                   {" "}
// //                   Your Email
// //                 </label>
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   name="email"
// //                   required
// //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
// //                   placeholder="john@gmail.com"
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="message"
// //                   className="block text-sm font-medium mb-2"
// //                 >
// //                   {" "}
// //                   Your Message
// //                 </label>
// //                 <textarea
// //                   id="message"
// //                   name="message"
// //                   required
// //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
// //                   placeholder="Hello, I'd like to talk about..."
// //                 />
// //               </div>

// //               <button
// //                 type="submit"
// //                 disabled={isSubmitting}
// //                 className={cn(
// //                   "cosmic-button w-full flex items-center justify-center gap-2"
// //                 )}
// //               >
// //                 {isSubmitting ? "Sending..." : "Send Message"}
// //                 <Send size={16} />
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };
// import {
//   Mail,
//   MapPin,
//   Phone,
//   Send,
// } from "lucide-react";
// import { cn } from "../lib/utils";
// import { useState } from "react";

// export const ContactSection = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setIsSubmitting(true);
//     setSuccessMsg("");

//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSuccessMsg("Message sent successfully! ✅");
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Get In <span className="text-primary">Touch</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Have a project in mind or want to collaborate? Feel free to reach out.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* LEFT SIDE */}
//           <div className="space-y-8">
//             <h3 className="text-2xl font-semibold mb-6">
//               Contact Information
//             </h3>

//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Email</h4>
//                   <a
//                     href="mailto:kashifbakhsi@gmail.com"
//                     className="text-muted-foreground hover:text-primary"
//                   >
//                     hello@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Phone className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Phone</h4>
//                   <a
//                     href="tel:+11234567890"
//                     className="text-muted-foreground hover:text-primary"
//                   >
//                     +1 (123) 456-7890
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <MapPin className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Location</h4>
//                   <p className="text-muted-foreground">
//                     Vancouver, BC, Canada
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE FORM */}
//           <div className="bg-card p-8 rounded-lg shadow-xs">
//             <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 required
//                 placeholder="Your Name"
//                 className="w-full px-4 py-3 border rounded-md"
//               />

//               <input
//                 type="email"
//                 required
//                 placeholder="Your Email"
//                 className="w-full px-4 py-3 border rounded-md"
//               />

//               <textarea
//                 required
//                 placeholder="Your Message"
//                 className="w-full px-4 py-3 border rounded-md resize-none"
//               />

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={cn(
//                   "cosmic-button w-full flex items-center justify-center gap-2"
//                 )}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//                 <Send size={16} />
//               </button>

//               {/* ✅ Success Message (replaces toast) */}
//               {successMsg && (
//                 <p className="text-green-500 text-sm mt-2 text-center">
//                   {successMsg}
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setIsSubmitting(true);
//     setSuccessMsg("");

//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSuccessMsg("Your enquiry has been sent successfully! ✅");
//     }, 1500);
//   };
const handleSubmit = (e) => {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

  const phoneNumber = "918981282173"; // your WhatsApp number (no +)

  const text = `Hello, I'm ${name}%0AEmail: ${email}%0AProject Details: ${message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(whatsappURL, "_blank");
};

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Planning a construction project or modular kitchen? Get in touch to
          discuss your requirements and turn your ideas into reality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:adil@example.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Moduspace786@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+918981282173"
                    className="text-muted-foreground hover:text-primary"
                  >
                    +91 89812 82173
                  </a>
                </div>
              </div>

              <div className="space-y-4">
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">
      <MapPin className="h-6 w-6 text-primary" />
    </div>

    <div>
      <h4 className="font-medium">Location</h4>
      <p className="text-muted-foreground">
       Tiretta Bazaar, Kolkata, India
      </p>
    </div>
  </div>

  {/* Google Map Embed */}
  <div className="w-full h-64 rounded-lg overflow-hidden border">
    <iframe
      title="Tiretta Bazaar Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9290!2d88.3563!3d22.5748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a7b2b2b2b2%3A0x0!2sTiretta%20Bazaar%2C%20Kolkata%2C%20West%20Bengal%20700073!5e0!3m2!1sen!2sin!4v1710000000000"
      className="w-full h-full"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              Request a Consultation
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-md"
              />

              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-md"
              />

              <textarea
                required
                placeholder="Tell me about your project (construction / kitchen / interior)..."
                className="w-full px-4 py-3 border rounded-md resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
                <Send size={16} />
              </button>

              {successMsg && (
                <p className="text-green-500 text-sm mt-2 text-center">
                  {successMsg}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};