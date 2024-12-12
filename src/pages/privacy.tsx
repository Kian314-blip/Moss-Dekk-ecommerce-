import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import Main_Image from "@/components/Main_Image"
import { MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BackToTop from "@/components/backToTop";

const inter = Inter({ subsets: ["latin"] });
const backend_url = process.env.NEXT_PUBLIC_API_URL

export default function Terms() {
    const [activeTerm, setActiveTerm] = useState<string>('');
    const [isFixed, setIsFixed] = useState<boolean>(false);
    const router = useRouter();

    const handleTermClick = (term: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setActiveTerm(term);

        const targetId = term.toLowerCase().replace(/ /g, '-');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 400);
        };

        // Scroll to the target element if the hash is present in the URL
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.getElementById(hash.substring(1));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('hashchange', () => {
            const newHash = window.location.hash;
            if (newHash) {
                const targetElement = document.getElementById(newHash.substring(1));
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [router.asPath]);

    return (
        <div className="home-container flex flex-col">
            <Header />
            <main style={{ "width": '100%' }}>
                <div className="main-container flex flex-col justify-center w-[100%]">
                    <Main_Image />
                    <div className="terms-body flex flex-row pt-[59px] px-52 pb-[154px] bg-white gap-[51px] max-[1700px]:px-20 max-[1024px]:pb-[75px] max-[1700px]:gap-[18px] max-[900px]:px-4">
                        <div className="min-w-[390px] max-[1023px]:min-w-[206px] max-[660px]:hidden">

                            <div className={`flex flex-col w-[390px] h-auto max-[1700px]:gap-[18px] max-[1023px]:w-[206px] max-[660px]:hidden ${isFixed ? 'fixed top-8' : ''}`}>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/terms#first" className={`flex text-lg leading-7 ${activeTerm === 'Kjøpsvilkår - Kjøpsvilkår' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Kjøpsvilkår
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/terms#second" className={`flex text-lg leading-7 ${activeTerm === 'Kjøpsvilkår - Betaling' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Betaling
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/terms#third" className={`flex text-lg leading-7 ${activeTerm === 'Kjøpsvilkår - Leveranser' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Leveranser
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/terms#fourth" className={`flex text-lg leading-7 ${activeTerm === 'Kjøpsvilkår - Returer & reklamasjoner' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Returer & reklamasjoner
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/privacy#personvern" onClick={(event) => handleTermClick('Personvern', event)} className={`flex text-lg leading-7 ${activeTerm === 'Personvern' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Personvern
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/privacy#cookies" onClick={(event) => handleTermClick('cookies', event)} className={`flex text-lg leading-7 ${activeTerm === 'cookies' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Cookies
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-[1064px] h-auto max-[1023px]:w-[640px]">
                            <div className="flex w-full h-auto pb-8 max-[660px]:justify-center max-[660px]:items-center" id="personvern">
                                <p className="text-4xl leading-10 font-semi-bold font-['Inter'] text-black max-[1460px]:text-2xl max-[1460px]:leading-8 max-[660px]:leading-7 max-[660px]:text-lg ">
                                    Personvern
                                </p>
                            </div>
                            <div className="hidden max-[660px]:flex max-[660px]:flex-col max-[660px]:h-auto max-[660px]:w-[206px] max-[660px]:pb-[17px]">
                                <div className="flex w-full cursor-pointer">
                                    <Link href={"/terms#first"} className={`flex text-lg leading-7 ${activeTerm === 'Kjøpsvilkår - Kjøpsvilkår' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Kjøpsvilkår
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href={"/terms#second"} className={`flex text-lg leading-7 ${activeTerm === 'Kjøpsvilkår - Betaling' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Betaling
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href={"/terms#third"} className={`flex text-lg leading-7 ${activeTerm === 'Kjøpsvilkår - Leveranser' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Leveranser
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href={"/terms#fourth"} className={`flex text-lg leading-7 ${activeTerm === 'Kjøpsvilkår - Returer & reklamasjoner' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Returer & reklamasjoner
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/privacy#personvern" onClick={(event) => handleTermClick('Personvern', event)} className={`flex text-lg leading-7 ${activeTerm === 'Personvern' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Personvern
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/privacy#cookies" onClick={(event) => handleTermClick('cookies', event)} className={`flex text-lg leading-7 ${activeTerm === 'cookies' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Cookies
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col w-full h-auto gap-4  max-[660px]:text-sm max-[660px]:leading-5">
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Hva slags informasjon finner du her? </span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        I dette dokumentet finner du informasjon om hvordan og hvorfor Byttdekk samler inn og bruker personopplysningene dine når du besøker hjemmesiden vår og bestiller varer fra oss, kontakter oss eller abonnerer på nyhetsbrevet vårt. Her beskriver vi også hvilke personopplysninger vi behandler, og det juridiske grunnlaget for hvordan vi bruker personopplysningene dine. Dessuten kan du se hvilke utenforstående som kan ha tilgang til personopplysningene dine, hvilke rettigheter du har overfor oss, og hvordan du kan utøve rettighetene dine.
                                        Hvis du har spørsmål eller synspunkter på innholdet i disse retningslinjene, er du velkommen til å kontakte oss. Du finner våre kontaktopplysninger under overskriftenKontakt og kommunikasjon lenger ned i dokumentet.
                                        <br /><br />
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-3xl leading-9 font-semi-bold text-[#FFCC45] max-[1024px]:text-2xl max-[660px]:text-lg max-[660px]:leading-7  max-[1024px]:leading-8 max-[1024px]:text-2xl max-[1024px]:leading-8 max-[660px]:text-lg max-[660px]:leading-7">Personopplysningene dine </span>
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Hva slags informasjon finner du her? </span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Hvilke personopplysninger som samles inn og brukes av oss, varierer fra tilfelle til tilfelle avhengig av hvordan du bruker tjenestene våre, og av hvilken informasjon du velger å dele med oss. Vi kan samle inn og bruke følgende personopplysninger om deg som besøker hjemmesiden vår, kjøper varer av oss eller registreres som representant for en bedrift som er kunde hos oss
                                        <br /><br />
                                        <ul className="list-disc pl-7 text-gray-700">
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">Kjøretøyets registreringsnummer</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">Kontakt- og leveringsopplysninger</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">Personnummer</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">Ordrehistorikk</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">Enhetsdata</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">Informasjon om hvordan du bruker hjemmesiden vår</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">Dine eventuelle kundevurderinger</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">Begrensede betalingsopplysninger i forbindelse med orden din</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">Andre personopplysninger du deler med oss</li>
                                        </ul>
                                        <br /> Når du besøker og bruker hjemmesiden vår, kan også enkelte av de nevnte personopplysningene samles inn automatisk fra den mobile enheten eller datamaskinen din gjennom bruk av såkalte cookies. Du kan lese mer om cookies og hvordan vi bruker dem under avsnittet «Hva er cookies, og hvordan brukes de?» lenger ned i dokumentet.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Hvordan og hvorfor behandler vi personopplysningene dine?  </span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        For at vi skal kunne tilby varer og tjenester og drive virksomheten vår effektivt, må vi behandle personopplysningene dine for følgende formål:
                                        <br /><br />
                                        <ul className="list-disc pl-7 text-gray-700">
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">tilby deg passende reservedeler og tilbyr </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">behandle ordren din og levere kjøpte varer</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">tilby monteringstjenester og andre tjenester relatert til bilen din </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">behandle eventuelle klager og returer </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">tilby deg kundeservice </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">tilby og administrere «Mine sider» </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">gi deg tilgang til hjemmesiden vår </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">utvikle hjemmesiden vår </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">ta imot kundevurderinger </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">markedsføre varene og tjenestenevåre</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">evaluere effektiviteten av annonsene og markedsføringstiltakene våre</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">sende nyhetsbrev</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">gjøre det mulig å fakturere og bokføre korrekt</li>
                                        </ul>
                                        <br />
                                        Ut over de ovennevnte formålene kan personopplysningene dine behandles for å oppfylle lovkrav, eller for å beskytte rettighetene våre og for å forhindre svindel eller annen uærlig aktivitet som kan skade oss eller kundene våre.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Hvor lenge lagres personopplysningene dine?  </span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Opplysningene dine lagres bare så lenge det er nødvendig for å oppfylle formålet med behandlingen. Hvor lenge vi lagrer personopplysningene dine, kan altså variere. Som hovedregel lagrer vi bare personopplysninger om våre aktive kunder, eller når loven krever det, eller om det foreligger andre nødvendige grunner til lagring. Du regnes som aktiv kunde når du har gjort et kjøp hos oss, har vært i kontakt med kundeservice hos oss eller har logget inn på medlemskontoen din i løpet av de siste tre årene. Personopplysninger som samles inn ved hjelp av cookies, behandles fram til og med utløpsdatoen deres. Ifølge loven er vi dessuten forpliktet til å lagre enkelte personopplysninger som bokføringsopplysninger, også etter at du ikke lenger er aktiv kunde.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Hvem har tilgang til personopplysningene dine?   </span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Personopplysningene dine kan overføres til eller deles med utvalgte eksterne leverandørersom leverer forskjellige typer tjenester til oss, eller som vi samarbeider med. Vi bruker dessuten disse eksterne leverandørene til å tilby montering og service, utvikle og drifte hjemmesiden vår og andre IT-løsninger, tilby og levere varer, tilby sikre betalingsmetoder og for å markedsføre varene og tjenestene våre. For at disse leverandørene skal kunne utføre arbeidet sitt, kan det være nødvendig å dele personopplysninger med dem.
                                        <br /><br />
                                        VI kan også oppgi nødvendig informasjon til myndighetene for å ivareta rettslige interesser og forpliktelser, eller hvis du har godkjent det.<br /><br />
                                        Hjemmesiden vår kan inneholde lenker til andre hjemmesider. Hvis du klikker på en slik lenke og går ut av hjemmesiden vår, er det ikke lenger vi som har ansvaret for behandlingen av personopplysningene dine, men den som er ansvarlig for nettsiden du besøker. Vi oppfordrer deg derfor til å lese retningslinjene for personvern for det nye nettstedet, slik at du forstår hvordan personopplysningene dine behandles der.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Hvordan beskytter vi personopplysningene dine?  </span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Vi har implementert flere teknologiske og organisatoriske sikkerhetstiltak for å beskytte personopplysningene dine mot uautorisert tilgang, uautorisert behandling og tap, ødeleggelse eller skade, for eksempel ved en ulykke.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Overføres personopplysningene dine utenfor EU/EØS?  </span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Vi benytter delvis eksterne leverandører som har virksomheten sin i utlandet, for eksempel til datalagring, support og driftstjenester. I praksis betyr dette at personopplysningene dine kan overføres til land utenfor det europeiske samarbeidsområdet (EØS). Overføring av personopplysninger til land utenfor EØS forutsetter at vi har gjort nødvendige juridiske, teknologiske og organisatoriske sikkerhetstiltak for å sikre at personopplysningene beskyttes på en tilfredsstillende måte.
                                        <br /><br />
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4" id="cookies">
                                    <span className="text-3xl leading-9 font-semi-bold text-[#FFCC45] max-[1024px]:text-2xl max-[660px]:text-lg max-[660px]:leading-7  max-[1024px]:leading-8">Cookies</span>
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Hva slags informasjon finner du her? </span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Hva er cookies, og hvordan brukes de?
                                        <br /><br />
                                        Cookies er tekstfiler som lagres i nettleseren din når du bruker forskjellige nettsteder. Cookies lagrer informasjon om enheten din, og om hvordan du bruker et spesifikt nettsted. Når du besøker samme hjemmeside igjen, sender den en kopi av filene tilbake. Takket være cookies kan nettsteder huske språkvalg og innloggingsmodus eller tilpasses hva du har gjort tidligere. For eksempel kan cookies «huske» varer du har sett på tidligere i nettbutikken vår, eller som du har lagt i handlekurven din. Informasjonen som er samlet inn ved hjelp av cookies, kan inneholde personopplysninger i form av IP-adresse, enhetsinformasjon med mer.
                                        <br />
                                        Personopplysningene som samles inn ved hjelp av cookies, brukes for følgende formål:
                                        <br />
                                        <ul className="list-disc pl-7 text-gray-700">
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">gi tilgang til hjemmesiden</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">opprettholde sikkerheten på hjemmesiden </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">tilby tiltenkt funksjonalitet på hjemmesiden </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">analysere bruken av hjemmesiden</li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">markedsføre varene og tjenestene våre</li>
                                        </ul>
                                        <br /> Cookiene som er nødvendige for å gi deg sikker tilgang til hjemmesiden vår, installeres automatisk på enheten din basert på vår berettigede interesse i å kunne ha en sikker hjemmeside der vi tilbyr varene og tjenestene våre. Andre cookies, blant annet slike som brukes til markedsføring og analyse, lagres bare etter at du har godkjent det via cookiebanneret på hjemmesiden vår. Du kan når som helst trekke tilbake samtykket ditt ved å klikke på lenken «Innstillinger for cookies» nederst på nettsiden.
                                        <br /><br />
                                        Cookies lagres på enheten din frem til og med utløpsdatoen deres
                                    </span>
                                </div>
                                <div className="flex flex-col w-[684px] h-auto gap-4 max-[1024px]:w-full">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Dine rettigheter  </span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Når vi behandler personopplysningene dine, har du alltid følgende rettigheter:
                                        <br /><br />
                                        <ul className="list-disc pl-7 text-gray-700">
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">rett til innsyn (registerutskrift) </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">rett til rettelse </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">rett til sletting  </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">rett til begrensning </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">rett til dataportabilitet </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">rett til å komme med innvendinger  </li>
                                            <li className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">rett til informasjon om datainnsamling </li>
                                        </ul>
                                        <br />
                                        Det kan finnes ytterligere krav eller bestemmelser som gir deg flere rettigheter. Det finnes også krav og bestemmelser som begrenser rettighetene dine. Blant annet kan det finnes lovforpliktelser som hindrer oss i å utlevere eller flytte deler av opplysningene dine, eller i å sperre eller slette opplysningene dine.
                                        <br /><br />
                                        For å utøve dine rettigheter ber vi deg kontakte oss via kontaktinformasjonen under overskriften «Kontakt og kommunikasjon»”.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-3xl leading-9 font-semi-bold text-[#FFCC45] max-[1024px]:text-2xl max-[660px]:text-lg max-[660px]:leading-7  max-[1024px]:leading-8">Kontaktopplysninger</span>
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Hvem kan du kontakte hvis du har spørsmål om behandlingen av personopplysningene dine? </span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Ved spørsmål eller synspunkter på hvordan vi behandler om personopplysningene dine, kan du alltid kontakte serviceteamet ved å sende en e-post til security@dinordics.se
                                        <br /><br />
                                        Hvis du mener at personopplysningene dine har blitt behandlet feil av oss, har du også rett til å kontakte og klage til de<br />
                                        norske personvernmyndighetene, (<br />
                                        https://mossdekk.no), som er ansvarlig tilsynsmyndighet i Norge.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Bedriftsinformasjon  </span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Moss Dekk AS<br />
                                        Skredderveien 5, 1537 Mos<br /><br />
                                        Retningslinjene for personvern ble sist oppdatert 2. februar 2023.<br />
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Partner />
                    <Footer />
                    <BackToTop />

                </div>
            </main>it
        </div>
    );
}
