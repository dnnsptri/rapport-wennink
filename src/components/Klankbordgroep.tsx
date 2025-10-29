const Klankbordgroep = () => {
  return (
    <section id="klankbordgroep" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-4">
        <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
          <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
            <div className="pr-6">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl">
                Klankbordgroep Wennink
              </h1>
              <p className="intro mb-9">
                Een door Peter Wennink breed samengestelde klankbordgroep van deskundigen en bestuurders uit het bedrijfsleven, de financiële sector, kennisinstellingen en overheid denkt mee over het advies. Deze groep helpt om te zorgen dat zijn rapport niet alleen economisch stevig onderbouwd is, maar ook doeltreffend en maatschappelijk relevant wordt.
              </p>
              <p>
              Daarnaast heeft Peter Wennink diverse werksessies met experts uit uiteenlopende delen van het bedrijfsleven en kennisinstellingen uit de domeinen waar Nederland het verschil kan maken: digitalisering &amp; AI, veiligheid, klimaat &amp; energie en medische &amp; biotechnologie.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg"
                alt="about 1"
                className="aspect-[0.7] w-full rounded-lg object-cover md:w-1/2"
              />
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg"
                  alt="about 2"
                  className="aspect-[1.1] rounded-lg object-cover"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-vGgn0xLdy8s-unsplash.jpg"
                  alt="about 3"
                  className="aspect-[0.7] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/johnson-wang-iI4sR_nkkbc-unsplash.jpg"
                alt="about 4"
                className="aspect-[0.9] w-full rounded-lg object-cover md:w-1/2"
              />
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
                  alt="about 5"
                  className="aspect-[0.8] rounded-lg object-cover"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/alvin-engler-bIhpiQA009k-unsplash.jpg"
                  alt="about 6"
                  className="aspect-[0.9] rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="px-8">
              <h1 className="mb-8 text-2xl font-semibold lg:mb-6">
                Flinke namen
              </h1>
              <p className="mb-9 lg:text-xl">
                De eerste namen in de klankbordgroep kunnen wij al bekend maken:
              </p>
              <p className="text-muted-foreground">
                • Naam 1<br />
                • Naam 2<br />
                • Naam 3<br />
                • Naam 4<br />
                • Naam 5<br />
                • Naam 6<br />
                • Naam 7<br />
                • Naam 8<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Klankbordgroep };
