import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// רשימת כל המוסדות
const baseInstitutes = [
  { name: "אוניברסיטת תל אביב", slug: "tel-aviv" },
  { name: "הטכניון", slug: "technion" },
  { name: "האוניברסיטה העברית", slug: "hebrew" },
  { name: "אוניברסיטת חיפה", slug: "haifa" },
  { name: "אוניברסיטת בר אילן בר-אילן", slug: "bar-ilan" },
  { name: "אוניברסיטת בן גוריון", slug: "bgu" },
  { name: "האוניברסיטה הפתוחה", slug: "open" },
  { name: "מכון ויצמן", slug: "weizmann" },
  { name: "HIT מכון טכנולוגי חולון", slug: "MainApp" },
  { name: "שנקר", slug: "shenkar" },
  { name: "סמי שמעון", slug: "sami-shamoon" },
  { name: "ספיר", slug: "sapir" },
  { name: "מכללת רופין המרכז האקדמי רופין", slug: "ruppin" },
  { name: "תל חי", slug: "telhai" },
  { name: "מכון לב המרכז האקדמי לב", slug: "lev" },
  { name: "עזריאלי", slug: "azrieli" },
  { name: "וינגייט", slug: "wingate" },
  { name: "קיי", slug: "kaye" },
  { name: "מכללת אפקה", slug: "afeka" },
  { name: "המכללה למנהל", slug: "hamichlala" },
  { name: "מכללת הדסה", slug: "hadasa" },
  { name: "בית-ברל בית ברל", slug: "berl" },
  { name: "עמק יזרעאל", slug: "emek-yizrael" },
  { name: "מכללת אורנים", slug: "oranim" },
  { name: "אוניברסיטת אריאל", slug: "ariel" },
  { name: "מכללת תלפיות", slug: "talpiot" },
  { name: "המכללה האקדמית כנרת", slug: "kinneret" },
  { name: "המרכז האקדמי פרס", slug: "peres" },
];

const allInstitutes = baseInstitutes.map((inst) => ({
  ...inst,
  logo: `/logos/${inst.slug}.png`,
}));

function getBalancedAngles(n) {
  const angleStep = 360 / n;
  const angles = [];
  for (let i = 0; i < n; i++) {
    const angle = i * angleStep;
    if (i % 2 === 0) {
      angles.unshift(angle);
    } else {
      angles.push(angle);
    }
  }
  return angles;
}

export default function LandingPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const filteredInstitutes = allInstitutes.filter((inst) => {
    try {
      const regex = new RegExp(searchQuery, 'i');
      return regex.test(inst.name);
    } catch {
      return true;
    }
  });

  const centerSize = 200;
  const buttonSize = 80;
  const baseRadius = centerSize / 2 + buttonSize / 2 + 20;
  const circleSpacing = 100;
  const maxAllowedRadius = Math.min(screenSize.width, screenSize.height) / 2 - buttonSize;

  const buttonsWithPosition = [];
  let counter = 0;
  let ring = 0;
  let remaining = filteredInstitutes.length;

  while (remaining > 0) {
    const itemsInRing = 9 + ring * 7;
    const radius = baseRadius + ring * circleSpacing;
    if (radius > maxAllowedRadius) break;

    const currentCount = Math.min(itemsInRing, remaining);
    const angles = getBalancedAngles(currentCount);

    for (let i = 0; i < currentCount && counter < filteredInstitutes.length; i++) {
      const angle = angles[i];
      const rad = (angle * Math.PI) / 180;
      const x = radius * Math.cos(rad);
      const y = radius * Math.sin(rad);

      buttonsWithPosition.push({
        ...filteredInstitutes[counter],
        x,
        y,
      });

      counter++;
    }

    remaining = filteredInstitutes.length - counter;
    ring++;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 via-blue-300 to-sky-50 relative overflow-hidden px-4 py-8">
      <div className="relative w-full h-[1000px] max-w-[1000px] max-h-[1000px] flex items-center justify-center flex-col gap-4">
        <div className="w-[200px] h-[200px] rounded-full bg-blue-600 text-white flex flex-col items-center justify-center text-center text-4xl font-bold shadow-lg z-10 p-4 gap-2">
          <div>CS24</div>
          <input
            type="text"
            placeholder="חפש מוסד..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-sm px-3 py-1 w-[150px] text-center border border-white bg-white text-black rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {buttonsWithPosition.map((inst) => (
            <button
              key={inst.slug}
              onClick={() => navigate(`/${inst.slug}`)}
              className="w-20 h-20 absolute rounded-full bg-white shadow-md border border-blue-200 hover:bg-blue-100 transition flex items-center justify-center text-center font-medium z-0 overflow-hidden pointer-events-auto"
              style={{ transform: `translate(${inst.x}px, ${inst.y}px)` }}
            >
              <img
                src={inst.logo}
                alt={inst.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const textElement = document.createElement("span");
                  textElement.textContent = inst.name;
                  textElement.className = "text-[12px] px-2";
                  e.currentTarget.parentElement?.appendChild(textElement);
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
