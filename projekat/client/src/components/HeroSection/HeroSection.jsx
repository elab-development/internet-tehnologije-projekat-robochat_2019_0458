import { Head, Para, Subs, CapsLetter, Logo, HandleImg } from "./HeroSectionElements"; // Uvoz stilizovanih elemenata
import { StyledBtn } from "../../assets/styles/ButtonElements"; // Uvoz stilizovanog dugmeta
import { useAuth } from "../../hooks/useAuth"; // Uvoz hook-a za autentifikaciju
import { Link } from "react-router-dom"; // Uvoz Link komponente iz react-router-dom za navigaciju

export default function HeroSection() {
  const { token, user } = useAuth(); // Dohvatanje tokena i korisničkih informacija iz hook-a useAuth

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
      {user?.isAdmin ? (
        // Ako je korisnik admin, prikazuje se admin sadržaj
        <div>
          <Head>
            Hello <CapsLetter>Administrator!</CapsLetter> {/* Pozdrav za administratora */}
          </Head>
          <Para>Manage users, settings, and view analytics.</Para> {/* Opis za administratore */}
          <div style={{ position: 'relative', textAlign: 'center' }}>
  {/* Arrow pointing at the button */}
  <iframe
    style={{
      border: 'none',
      width: '150px',
      height: '150px',
      position: 'absolute',
      bottom: '2px',  // Adjust to move the arrow higher
      left: '31%',     // Shifting it a bit to the right
      transform: 'translateX(-50%) scaleX(-1)', // To fine-tune the arrow position
    }}
    src="https://lottie.host/embed/4b9c2b4c-d510-40da-bb28-539a0cfb29ed/O3hzbRwgTv.json"
    title="Arrow Animation"
  ></iframe>
    {/* Button positioning adjusted */}
    <div style={{
              position: 'absolute',
              left: '21%',    // Adjust horizontal position to align with the red box
              transform: 'translateX(-50%)',
            }}>
          <Link to="/dashboard">
            <StyledBtn zero onClick={() => {}}>
              Go to Dashboard
            </StyledBtn>
          </Link>
        </div>
        </div>
</div>

      ) : (
        // Ako korisnik nije admin, prikazuje se sadržaj za regularne korisnike
        <div style={{ marginLeft: '200px', position: 'relative' }}>
          <Head>
            Welcome to the <CapsLetter>Bot AI</CapsLetter> {/* Pozdrav za regularne korisnike */}
          </Head>
          <Subs>Free AI Therapist right at your service!</Subs> {/* Podnaslov za chat bot */}
          <Para>
            Meet Bot AI, your free, 24/7 therapist! 
            Whether you're feeling stressed, anxious,
            or just need someone to talk to, Bot AI is here to listen and support you.
            Start chatting today and discover a new way to care for your mental health – all for free!
          </Para>
          <div style={{ position: 'relative', textAlign: 'center' }}>
  {/* Arrow pointing at the button */}
  <iframe
    style={{
      border: 'none',
      width: '150px',
      height: '150px',
      position: 'absolute',
      bottom: '80px',  // Adjust to move the arrow higher
      left: '75%',     // Shifting it a bit to the right
      transform: 'translateX(-50%) scaleX(-1)', // To fine-tune the arrow position
    }}
    src="https://lottie.host/embed/4b9c2b4c-d510-40da-bb28-539a0cfb29ed/O3hzbRwgTv.json"
    title="Arrow Animation"
  ></iframe>

            {/* Button positioning adjusted */}
            <div style={{
              position: 'absolute',
              bottom: '3px', // Adjust to fine-tune vertical position
              left: '73%',    // Adjust horizontal position to align with the red box
              transform: 'translateX(-50%)',
            }}>
              <Link to={token ? "/chat" : "/register"}>
                <StyledBtn zero onClick={() => {}}>
                  Start Therapy 
                </StyledBtn>
              </Link>
            </div>
</div>

        </div>
      )}
    </div>
  );
}
