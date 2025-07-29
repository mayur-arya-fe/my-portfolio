import { useRef } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export const ContactMe = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    toast.loading("Sending your message...", { id: "send-status" });

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/mayurarya.webdev@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (res.ok) {
        form.reset();
        toast.success("Message sent successfully!", { id: "send-status" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again.", { id: "send-status" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-6">
        <Mail className="w-8 h-8 text-violet-600 dark:text-violet-400" />
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
          Contact Me
        </h2>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg shadow-indigo-100 dark:shadow-gray-900">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="_captcha" value="false" />
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded border border-gray-200 border-gray-700 bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded border border-gray-200 border-gray-700 bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-violet-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 rounded border border-gray-200 border-gray-700 bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-2 rounded font-medium hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};
