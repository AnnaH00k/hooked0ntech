export default function Ideas() {
    const ideas = [
      {
        name: "FABapp",
        description: "Lern-App für Auszubildende in Bäderbetrieben",
        target: "Auszubildende in Bäderbetrieben",
      },
      {
        name: "Azubee",
        description: "Plattform zum Teilen von Lernmaterialien, AusbildungsHelfer",
        target: "Ausbilder und Auszubildende aller Berufe",
      },
      {
        name: "Challengor",
        description: "App zum Erstellen und Teilen von Challenges",
        target: "Allgemein",
      },
      {
        name: "SipSave",
        description: "Wein-App zum Speichern, Teilen und Finden von Weinen",
        target: "Weinliebhaber",
      },
      {
        name: "Hookbook",
        description: "Schreib-App mit Statistik, Zielsetzung, Recherche-Organisation, To-Do-Liste und KI-Optimierung",
        target: "Autoren",
      },
      {
        name: "DesignatedDesigns",
        description: "Webseite mit Designvorlagen für CSS Frameworks",
        target: "Webdesigner",
      },
      {
        name: "SphereMarketer",
        description: "Marketing-Automatisierungstool für Social Media Plattformen",
        target: "Social Media Manager und Marketer",
      },
      {
        name: "MediMemo/ DocDiary",
        description: "Pflege-App für Arztberichte, Pläne, Termine und mehr",
        target: "Pflegekräfte und Angehörige",
      },
      {
        name: "Persönlicher Bot",
        description: "Individuell entwickelter Chatbot und KI-Modell",
        target: "Benutzerdefiniert",
      },
      {
        name: "VR/AR Mind Mapper",
        description: "Interaktive Lernumgebung mit VR/AR und Mind Mapping per Handtracking",
        target: "Schüler und Studenten",
      },
      {
        name: "Hooked0nStudys",
        description: "Webseite und App für effektives Lernen mit Studienorganisation, Statistiken und virtuellen Lernräumen",
        target: "Online-Studierende",
      },
      {
        name: "Zukunftsblick",
        description: "Sachbuch/ geschichte über Politik, Motivation und Vertrauen in Wissenschaft und Logik",
        target: "Allgemein",
      },
      {
        name: "Superhelden-Serie",
        description: "Animationsserie über eine intelligente Superheldin",
        target: "Allgemein (mit Fokus auf junge Mädchen)",
      },
      {
        name: "Video: Gaining back focus and dicipline/ from blob to badass",
        description: "Sharing my journey from being a blob to becoming a badass creator",
        target: "People who want motivation and real life stories",
      },
      {
        name: "Video: 100h of making money",
        description: "How to make money by creating content and selling products",
        target: "People interested in making money",
      },
      {
        name: "Video: 100h of making games",
        description: "How to make games from normal to vr games",
        target: "developers and people interested in making games",
      },
      {
        name: "Video: 100h of making music",
        description: "How to make music that you really like and how to sell it",
        target: "People interested in making money & music",
      },
      {
        name: "Video: Creating Cinema quality videos",
        description: " How to create videos that look like they are from the cinema",
        target: " People interested in making videos",
      },
      {
        name: "Video: How to create a frontend website with nextjs, Typescript and TailwindCSS",
        description: "",
        target: "developers",
      },
      {
        name: "Video: How to add a backend to your website",
        description: " ",
        target: "developers",
      },
      {
        name: "Video: Website & App in one with Nextjs",
        description: " ",
        target: "developers",
      },
    ];
  
    return (
      <main className="flex flex-col items-center min-h-screen justify-center sm:p-20  sm:mt-0 py-5 text-[#A0A2A0] bg-[#070b0b] w-full">
        <h1 className="sm:text-5xl text-xl font-bold mt-[5vh] mb-10">Meine Ideen</h1>
        <table className="text-xs sm:text-lg w-[90vw] max-w-5xl">
          <thead>
            <tr>
              <th className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">App Name</th>
              <th className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">Beschreibung</th>
              <th className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">Zielgruppe</th>
            </tr>
          </thead>
          <tbody>
            {ideas.map((idea, index) => (
              <tr key={index}>
                <td className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">{idea.name}</td>
                <td className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">{idea.description}</td>
                <td className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">{idea.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
  