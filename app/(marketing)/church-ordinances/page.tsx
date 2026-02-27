import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Church Ordinances | ${SITE_NAME}`,
  description: "Learn about the ordinances observed at The Church In The Valley.",
};

export default function ChurchOrdinancesPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-church-maroon to-church-burgundy pt-32 sm:pt-40 pb-16 sm:pb-24 text-center px-6">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-church-cream mb-4">
          Church Ordinances
        </h1>
        <p className="text-base sm:text-lg text-church-cream/80 max-w-xl mx-auto">
          The sacred practices that define our faith and fellowship.
        </p>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        <div className="space-y-12">
          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-church-maroon mb-4">Baptism</h2>
            <div className="border-l-4 border-church-gold pl-6 mb-6">
              <p className="text-church-muted italic">
                &ldquo;Therefore go and make disciples of all nations, baptizing them in the name of
                the Father and of the Son and of the Holy Spirit.&rdquo;
              </p>
              <p className="text-sm text-church-gold mt-2">— Matthew 28:19</p>
            </div>
            <p className="text-church-text leading-relaxed">
              Baptism is an outward expression of an inward change. It is a public declaration of
              your faith in Jesus Christ. At The Church In The Valley, we practice baptism by
              immersion as a symbol of the believer&apos;s identification with the death, burial, and
              resurrection of Christ.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-church-maroon mb-4">
              The Lord&apos;s Supper
            </h2>
            <div className="border-l-4 border-church-gold pl-6 mb-6">
              <p className="text-church-muted italic">
                &ldquo;For whenever you eat this bread and drink this cup, you proclaim the
                Lord&apos;s death until he comes.&rdquo;
              </p>
              <p className="text-sm text-church-gold mt-2">— 1 Corinthians 11:26</p>
            </div>
            <p className="text-church-text leading-relaxed">
              The Lord&apos;s Supper is a time of remembrance and reflection. We gather together to
              remember the sacrifice of Jesus Christ — His body broken and His blood shed for the
              forgiveness of our sins. This sacred ordinance strengthens our faith and unites us as
              the body of Christ.
            </p>
          </section>

          <div className="bg-church-warm-gray rounded-2xl p-8 text-center">
            <p className="text-church-muted">
              Content for this page is being updated. Please check back soon or contact us for more
              information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
