import Footer from "./(Components)/Footer";
import Header from "./(Components)/Header";
import MainContent from "./(Components)/MainContent";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <header className=" h-[484px]" style={{backgroundImage:'url(/Group-86.png)', backgroundSize:'cover', backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}>
        <Header/>
      </header>

      <main className="">
        <MainContent />
      </main>

      <footer className=" h-[464px]">
        <Footer />
      </footer>
    </div>
  );
}
