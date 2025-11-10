
import { motion } from "framer-motion";

const partners = [
  {
    name: "bKash",
    logo: "https://static.vecteezy.com/system/resources/previews/068/764/270/non_2x/bkash-logo-mobile-banking-app-icon-transparent-background-free-png.png",
  },
  {
    name: "Nagad",
    logo: "https://freelogopng.com/images/all_img/1679248828Nagad-Logo-PNG.png",
  },
  {
    name: "Rocket",
    logo: "https://files.fastexer.com/fastexer/currency/F6VRqMWfRSJYnuJkbLmJpGmUgOQ8ZZC4LuWvD73Z.png",
  },
  {
    name: "Visa",
    logo: "https://w7.pngwing.com/pngs/20/987/png-transparent-logo-visa-credit-card-business-visa-text-trademark-payment.png",
  },
  {
    name: "Mastercard",
    logo: "https://w7.pngwing.com/pngs/436/322/png-transparent-mastercard-logo-moneylive-mobile-payment-brand-mastercard-text-orange-logo.png",
  },
  {
    name: "NexusPay",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/068/705/963/small_2x/nexus-pay-logo-dbbl-mobile-banking-app-icon-free-png.png",
  },
];

export default function PaymentPartners() {
  return (
    <section className="py-16 px-4  dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            Trusted Payment Partners
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Pay with your favorite method — safe & instant.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex justify-center"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-10 w-auto  hover:scale-105  transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
