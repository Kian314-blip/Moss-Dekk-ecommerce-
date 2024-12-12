import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import Main_Image from "@/components/Main_Image"
import Terms_tick from "@/svg/Terms_tick";
import { useEffect, useState } from "react";
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
                    <div className="terms-body flex flex-row pt-[59px] px-52 pb-[154px] bg-white gap-[51px] max-[1700px]:px-20 max-[1024px]:pb-[75px] max-[1700px]:gap-[18px] max-[800px]:px-4">
                        <div className="min-w-[390px] max-[1023px]:min-w-[206px] max-[660px]:hidden">

                            <div className={`flex flex-col w-[390px] h-auto max-[1700px]:gap-[18px] max-[1023px]:w-[206px] max-[660px]:hidden ${isFixed ? 'fixed top-8' : ''}`}>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/terms#first" onClick={(event) => handleTermClick('first', event)} className={`flex text-lg leading-7 ${activeTerm === 'first' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Kjøpsvilkår
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/terms#second" onClick={(event) => handleTermClick('second', event)} className={`flex text-lg leading-7 ${activeTerm === 'second' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Betaling
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/terms#third" onClick={(event) => handleTermClick('third', event)} className={`flex text-lg leading-7 ${activeTerm === 'third' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Leveranser
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/terms#fourth" onClick={(event) => handleTermClick('fourth', event)} className={`flex text-lg leading-7 ${activeTerm === 'fourth' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Returer & reklamasjoner
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/privacy#personvern" className={`flex text-lg leading-7 ${activeTerm === 'Personvern' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Personvern
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/privacy#cookies" className={`flex text-lg leading-7 ${activeTerm === 'cookies' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Cookies
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[1063px] h-auto max-[1023px]:w-[640px]" id="first">
                            <div className="flex w-full h-auto pb-8 max-[660px]:justify-center max-[660px]:items-center">
                                <p className="text-4xl leading-10 font-semi-bold font-['Inter'] text-black max-[1460px]:text-2xl max-[1460px]:leading-8 max-[660px]:leading-7 max-[660px]:text-lg ">
                                    Rettferdige Vilkår Når Du Kjøper Dekk Og Felger Online
                                </p>
                            </div>
                            <div className="flex flex-row w-full gap-[45px] pb-[61px] max-[1220px]:gap-6 max-[1023px]:flex-col max-[1023px]:items-center max-[1023px]:justify-center max-[660px]:pb-[26px] max-[1023px]:pb-[46px]">
                                <div className="w-auto h-auto flex flex-row items-center justify-center gap-[6px] max-[1023px]:w-[280px] max-[1023px]:w-[280px] max-[1023px]:justify-start">
                                    <Terms_tick />
                                    <p className="font-['Inter'] text-lg leading-7 text-black font-normal max-[1220px]:text-base max-[1220px]:leading-6 text-left">
                                        100% passform garanter
                                    </p>
                                </div>
                                <div className="w-auto h-auto flex flex-row items-center justify-center gap-[6px] max-[1023px]:w-[280px] max-[1023px]:justify-start ">
                                    <Terms_tick />
                                    <p className="font-['Inter'] text-lg leading-7 text-black font-normal max-[1220px]:text-base max-[1220px]:leading-6">
                                        Enkel Retur
                                    </p>
                                </div>
                                <div className="w-auto h-auto flex flex-row items-center justify-center gap-[6px] max-[1023px]:w-[280px] max-[1023px]:justify-start">
                                    <Terms_tick />
                                    <p className="font-['Inter'] text-lg leading-7 text-black font-normal  max-[1220px]:text-base max-[1220px]:leading-6">
                                        Raske leveranser fra vårt lager
                                    </p>
                                </div>
                            </div>
                            <div className="hidden max-[660px]:flex max-[660px]:flex-col max-[660px]:h-auto max-[660px]:w-[206px] max-[660px]:pb-[17px]">
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/terms#first" onClick={(event) => handleTermClick('first', event)} className={`flex text-lg leading-7 ${activeTerm === 'first' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Kjøpsvilkår
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/terms#second" onClick={(event) => handleTermClick('second', event)} className={`flex text-lg leading-7 ${activeTerm === 'second' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Betaling
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/terms#third" onClick={(event) => handleTermClick('third', event)} className={`flex text-lg leading-7 ${activeTerm === 'third' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Leveranser
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/terms#fourth" onClick={(event) => handleTermClick('fourth', event)} className={`flex text-lg leading-7 ${activeTerm === 'fourth' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Kjøpsvilkår - Returer & reklamasjoner
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/privacy#personvern" className={`flex text-lg leading-7 ${activeTerm === 'Personvern' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Personvern
                                    </Link>
                                </div>
                                <div className="flex w-full cursor-pointer">
                                    <Link href="/privacy#cookies" className={`flex text-lg leading-7 ${activeTerm === 'cookies' ? 'font-semi-bold text-[#73C018]' : 'font-normal text-black'} max-[1460px]:text-base max-[1460px]:leading-6`}>
                                        Cookies
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col w-full h-auto gap-4  max-[660px]:text-sm max-[660px]:leading-5">
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6 max-[1460px]:text-xl max-[1460px]:leading-7 max-[660px]:text-base max-[660px]:leading-6 ">Kjøpsvilkår - Kjøpsvilkår</span>
                                    <span className="font-['Inter'] text-lg leading-7 font-normal text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5 ">
                                        Kontaktinformasjon til Mossdekk.com
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Kontaktinformation</span>
                                    <span className="font-['Inter'] text-lg leading-7 font-normal text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5 ">
                                        Moss Dekk AS<br />
                                        Skredderveien 5, 1537 Moss<br />
                                        Postboks: 6906 St Olavs Plass<br />0130 Oslo<br />
                                        <div className="w-full h-auto flex flex-row">
                                            <span className="text-lg leading-7 font-semi-bold text-[#73C018] max-[660px]:text-sm max-[660px]:leading-5">
                                                Organisasjonsnummer:{" "}
                                            </span>
                                            <p className="font-['Inter'] text-lg leading-7 font-normal text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5 ">
                                                &nbsp;+47 45 02 24 50
                                            </p>
                                        </div>
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Kontaktinformation</span>
                                    <span className="font-['Inter'] text-lg leading-7 font-normal text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5 ">
                                        Email: Kontaktskjema eller post@mossdekk.no<br />
                                        Telefon kundeservice:  45 02 24 50<br />
                                        Telefontid:<br /><br />
                                        Lavsesong hverdager 08.00 - 17.00<br />
                                        Høysesong (mars, april, mai, oktober & november) hverdager 08.00 - 18.00
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Allment</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Disse generelle vilkår og bestemmelser gjelder mellom Byttdekk.com og du som kunde, når du legger inn en bestilling hos oss.<br />
                                        Byttdekk.com er sertifisert av Trygg e-Handel. Trygg e-Handel skaper trygghet for de som handler på nettet, enten de er selger eller kjøper, og være et redskap til å fremme en oversiktlig, seriøs og trygg handel på nettet i tråd med de krav som stilles fra alle parter i en raskt økende handelsform. For å lese mer om Trygg e-Handel, trykk her.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4" id="second">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Salg til mindreårige</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Disse generelle vilkår og bestemmelser gjelder mellom Byttdekk.com og du som kunde, når du legger inn en bestilling hos oss.<br />
                                        Byttdekk.com er sertifisert av Trygg e-Handel. Trygg e-Handel skaper trygghet for de som handler på nettet, enten de er selger eller kjøper, og være et redskap til å fremme en oversiktlig, seriøs og trygg handel på nettet i tråd med de krav som stilles fra alle parter i en raskt økende handelsform. For å lese mer om Trygg e-Handel, trykk her.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Bestilling</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Alle bestillinger vi mottar behandles innen 24 timer i en normal arbeidsuke.<br />
                                        Vi anbefaler at du logger deg inn på Byttdekk.com for å sjekke fremgangen i din bestilling.<br />
                                        Innlogging finner du her.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Produkter</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Når du bestiller produkter fra Byttdekk.com er det i enkelte tilfeller inkludert tilbehør og tjenester i prisen. Disse listes opp under:
                                        <br />
                                        <br />
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Dekk og aluminiumsfelg (komplett hjul)</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Vi monterer og balanserer hjulene for kun 99 kroner per stykk, bolt/mutter og eventuell navring for sentrering på bilen er inkludert med tilpasnngsgaranti.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Dekk og aluminiumsfelg (komplett hjul)</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Vi monterer og balanserer hjulene for kun 99 kroner per stykk. OBS! Bolt inngår ikke, men i de fleste tilfeller passer bilens originalbolter.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4" id="third">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Aluminiumsfelg</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Sølvfarget bolt/mutter og eventuell navring inngår med tilpasnngsgaranti.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Kampanjekode</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Kun en rabattkode kan benyttes ved hvert kjøp
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Miljøavgift</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Miljøavgiften (25kr/dekk) du betaler når du kjøper dekk av oss på Byttdekk, gjør til at du med god samvittighet og helt kostnadsfritt kan legge igjen dine dekk på valgfritt verksted når de er utslitt. Dekkene kommer da bli gjenvinnet på et miljøaktig vis. Sørg for å spare kvitteringen som du får av oss for å ha en bekreftelse på at du har betalt miljøavgiften for dine dekk.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">TPMS</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Hvis bilen din har sensorer i hjulene så må også dine vinterhjul har det for at TPMS skal kunne fungere. For å vite hvilket system bilen din har så står det vanligvis tydelig i instruksjonsboken som følger med bilen. Du kan også ta kontakt med en godkjent forhandler eller bilprodusent. Sjekk hvilken du har da den kan ha solgt forskjellige systemer da bilen ble solgt ny. I de fleste tilfeller kan vi selge, programmere og installere dine hjul/dekk med TPMS. I unntakstilfeller kan eventuellt etterprogrammering bli gjort av en forhandler eller dekkbutikk lokalt. I disse unntakstilfeller kan vi ikke dekke eventuelle ekstra kostnader som muligens oppstår. Det finnes flere bilmodeller som vi ikke kan skaffe TPMS til. Vår bildatabase oppdateres på daglig basis, så om det ikke vises hør gjerne av deg til vår kundetjeneste for å sjekke om det går å skaffe for akkurat din bilmodell.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Garanti</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Alle varer fra Byttdekk.com har 1 års garanti, dette gjelder fabrikasjonsfeil. Skade på felg som er forårsaket av stenskade eller skade som er forårsaket av verktøy ved montering, demontering eller balansering erstattes ikke. Garantien gjelder i Norge. Bythjul følger alltid forbrukerkjøpsloven, og ved eventuell tvist følger Bythjul Forbrukerrådets anbefalinger og råd (se www.forbrukerradet.no angående klageprosedyren). Kunden skal reklamere en feil vare innen rimelig tid fra dette ble oppdaget eller burde blitt oppdaget.
                                        Har du spørsmål angående garanti er du velkommen til å kontakte kundeservice på telefon: 23 96 00 69, eller via vårt kontaktskjema som du finner her.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4" id="fourth">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Passformgaranti </span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Når du søker et komplett hjul, dekk eller felg gjennom Byttdekk sitt hurtigsøk, garanterer vi at det passer bilen din.Det eneste du trenger å vite er registreringsnummeret eller bilmodellen. Ved kjøp av løse dekk eller felger må du sørge for at produktet som skal monteres med dekket/felgen har samme diameter.? Eksempel: Kjøper du et dekk som har dimensjonen 205/55-16, må felgen være 16 tommer i diameter. Den enkleste måten å sjekke dette på er ved å lese på dekket du skal bytte ut. Hvis det stemmer, gjelder passformgarantien. Hvis vi skulle ha feil informasjon i databasen vår, vil vi kostnadsfritt ta tilbake de feilaktige produktene. Ved kjøp av felger fra Byttdekk.com er det viktig at du håndterer varene forsiktig før du har fastslått at alt fungerer som det skal. Når du har mottatt pakkene dine, bør du alltid testmontere ett av hjulene på bilens foraksel. Ikke pakk opp resten av pakkene før du har forsikret deg om at det første hjulet passer. Gjelder innen 60 dager fra kjøpstidspunktet. Passformgarantien gjelder så lenge produktene kun er prøvemontert.Ettersom det finnes en viss variasjon i kontrollkrav avhengig av årsmodell og hvordan bilen er registrert, bør du sjekke at belastningsindeks og hastighetsindeks på dekket er tilstrekkelig for bilen din.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Komplette Hjul</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Når du søker etter et komplett hjul, dekk eller felg i Byttdekk.coms hurtigsøk garanterer vi at vårt utvalg passer din bil. Det eneste du trenger å vite er informasjonen om din bil.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Dekk & Felger</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Ved kjøp av løse dekk eller felger må du dobbeltsjekke at produktet som skal monteres har samme diameter som resten.Eksempel: Kjøper du et dekk som har dimensjonen 205/55-16, må felgen ha diameter på 16 tommer. Dette kontrollerer du enklest ved å lese på dekket som skal byttes ut. Stemmer det overens, gjelder vår tilpasningsgaranti.
                                    </span>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-4">
                                    <span className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1460px]:text-xl max-[1460px]:leading-7  max-[660px]:text-base max-[660px]:leading-6">Feil produkt</span>
                                    <span className="text-lg leading-7 font-normal font-['Inter'] text-zinc-500 max-[660px]:text-sm max-[660px]:leading-5">
                                        Om vi mot formodning skulle ha oppgitt feil produkter i vår database, tar vi selvfølgelig tilbake produktene kostnadsfritt.
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Partner />
                    <Footer />
                    <BackToTop />
        
                </div>
            </main>
        </div>
    );
}
