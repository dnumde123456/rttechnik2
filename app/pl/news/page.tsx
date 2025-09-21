import { Badge } from "@/components/ui/badge"

export default function AktualnosciPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4">Aktualności</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Aktualności i Wydarzenia</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Bądź na bieżąco z najnowszymi wiadomościami RTTechnik, udziałem w wydarzeniach i ważnymi kamieniami milowymi firmy.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <p className="text-xl text-muted-foreground mb-4">Aktualnie brak dostępnych wiadomości.</p>
            <p className="text-muted-foreground">Sprawdź ponownie wkrótce, aby zobaczyć informacje o naszych najnowszych wydarzeniach i aktualnościach!</p>
          </div>
        </div>
      </section>
    </>
  )
}
