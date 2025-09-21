import { Badge } from "@/components/ui/badge"

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4">News & Events</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Company News & Industry Events</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay up to date with RTTechnik's latest news, events participation, and important company milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <p className="text-xl text-muted-foreground mb-4">No news articles available at the moment.</p>
            <p className="text-muted-foreground">Check back soon for updates about our latest events and company news!</p>
          </div>
        </div>
      </section>
    </>
  )
}
