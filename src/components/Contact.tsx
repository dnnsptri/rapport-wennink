import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

interface ContactProps {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
}

const Contact = ({
  title = "Contact",
  description = "Informatie voor de pers en andere geïnteresseerden.",
  emailLabel = "Meer informatie over de presentatie & rapport?",
  emailDescription = "Neem hiervoor contact op met de woordvoerder van Peter Wennink, Margriet Bokhorst:",
  email = "pers@rapportwennink.nl",
  officeLabel = "Andere vraag?",
  officeDescription = "Heeft u een andere vraag over dit onderwerp? Stuur dan een e-mail naar het volgende adres:",
  officeAddress = "vraag@rapportwennink.nl",
  phoneLabel = "Phone",
  phoneDescription = "0646767704",
  phone = "+31646767704",
}: ContactProps) => {
  return (
    <section id="contact" className="bg-background py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-14">
          <h1 className="mb-4 text-3xl font-bold md:mb-6 md:text-5xl lg:mb-10 lg:text-6xl">
            {title}
          </h1>
          {/* <p className="max-w-xl text-lg">
            {description}
          </p> */}
        </div>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="mb-3">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline"
            >
              {email}
            </a>
            &nbsp;of&nbsp; 
            <a
              href={`tel:${phone}`}
              className="font-semibold hover:underline"
            >
              {phone}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="mb-3">{officeDescription}</p>
            <a href={`mailto:${officeAddress}`} className="font-semibold hover:underline">
              {officeAddress}
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mt-12 md:mt-20 flex flex-col justify-between gap-4 border-t pt-6 md:pt-8 text-sm font-medium lg:flex-row lg:items-center lg:text-left">
            <p>
              © 2025 Rapport Wennink.
            </p>
            {/*<p>
              <a href="#" className="text-primary ml-1 hover:underline">
                  Privacy Policy
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
