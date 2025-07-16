import profileIMG from "../assets/profile.jpg"

export default function Home() {
  return (
    <section className="text-center py-20" id="home">
         <img
        src={profileIMG}
        alt="Mercy Lubanga"
        className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
      />
      <h1 className="text-5xl font-bold">Hi, I'm Mercy Lubanga</h1>
      <p className="mt-4 text-2xl text-blue-500">Front-End Developer</p>
      <p className="mt-2 text-lg max-w-xl mx-auto">
        I build user-friendly, responsive web applications with clean, elegant designs.
      </p>
    </section>
  );
}
