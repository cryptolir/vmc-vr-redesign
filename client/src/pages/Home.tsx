import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * VMC-VR Redesigned Homepage
 * Modern, premium healthcare design with Hebrew RTL support
 * Design Philosophy: Premium Medical Wellness - Modern Minimalism
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const heroVideoUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/vmc-vr-hero-bg_503b6c0d.mp4";

  const useCaseImages = {
    waiting: "https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/המתנה לטיפול_272b09ab.png",
    doctor: "https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/רופאה רגועה באמצע עבודה_2c853958.png",
    injection: "https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/לפני זריקה_90315631.png",
    sleep: "https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/תהליך לפני שינה_e1a1d821.png",
    dental1: "https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/המתנה במרפאת שיניים_b8118fac.png",
    dental2: "https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/במרפאת שיניים_e5a357b2.png",
    ultrasound: "https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/המתנה לפני טיפול בביח_3510184d.png",
    workBreak: "https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/רגיעה באמצע יום עבודה_d20a3285.png",
  };

  const faqItems = [
    {
      question: "האם הכלי הזה נבדק? נעשו מחקרים, פיילוטים?",
      answer:
        "הכלי מבוסס על שיטות וטכניקות טיפול הנתמכות מחקרית ונשענות על ספרות מדעית. בשנים האחרונות בוצעו עשרות פיילוטים וניסויים מוצלחים במרפאות שונות, מרכזים רפואיים ואוכלוסיות שונות. בפיילוטים אלו נראו שינויים משמעותיים במדדים הפיזיולוגיים - ירידה במדדי HRV ושינויים בדפוסי פעילות מוחית.",
    },
    {
      question: "מאיזה גיל ניתן להשתמש במכשיר?",
      answer:
        "הגיל המינימלי המאושר לשימוש בחומרה (משקפי מציאות מדומה) הוא מ-12 ומעלה, בעיקר מהסיבה הטכנית שהמכשיר והעדשות גדולות מידי למימדי ראש של ילד.",
    },
    {
      question: "יש לי כבר מכשיר דומה, מה ההבדל?",
      answer:
        "המערכת VR-TheraFix היא כלי תפעולי-מבני שעובד באופן נקודתי על נשימה וקשב. הוא מופעל לזמן מדויק עפ״י מספר שלבים מתוכנן, בתהליך ספציפי. זה לא סירטון מרגיע או מדיטציה, אלא כלי מובנה עם פרוטוקול מסודר להפחתת דריכות.",
    },
    {
      question: "מה העלויות?",
      answer:
        "התשלום הינו עבור רשיון שימוש חודשי במכשיר - ללא הגבלה במספר ההפעלות והשימושים. הרשיון כולל ליווי וסיוע לצוות בתיפעול המכשיר, שירות טכני והגעה פיזית במידת הצורך.",
    },
    {
      question: "איך אני יודע אם המערכת מתאימה למרפאה שלי?",
      answer:
        "המערכת מתאימה במיוחד למרפאות בהן קיים זמן המתנה מובנה לטיפול או בדיקה, ולסביבות עבודה בהן נתקלים במטופלים במצב של דריכות או מתח מוגבר. כדי לוודא את יעילות הכלי, ניתנת אפשרות לבצע בדיקת התאמה.",
    },
    {
      question: "איך המערכת משתלבת בתהליך העבודה במרפאה?",
      answer:
        "השימוש מתבצע בזמן ההמתנה הקיים. המערכת מופעלת על ידי צוות המרפאה באופן קל ופשוט, ללא צורך בנוכחות הרופא וללא שינוי בזרימת העבודה השוטפת.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">VMC-VR</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-primary transition-colors">
              אודות
            </a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">
              איך זה עובד
            </a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">
              שאלות נפוצות
            </a>
            <Button className="rounded-lg">לתיאום הדגמה</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 container text-center text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            ויסות טרום־טיפולי במציאות מדומה
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            הכנה פיזיולוגית של מטופלים לפני בדיקות וטיפולים רפואיים
          </p>
          <p className="text-lg md:text-xl mb-8 font-light opacity-90">
            הסטנדרט החדש להתנהלות לפני טיפול או בדיקה רפואית
          </p>
          <Button size="lg" className="rounded-lg text-base px-8 py-6">
            לתיאום הדגמה
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              האתגר במרפאות
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              במרפאות רבות, האתגר אינו מורכבות הפעולה הרפואית, אלא מטופלים שמגיעים לחדר הטיפול כשהגוף כבר בדריכות גבוהה.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "קושי לשתף פעולה", desc: "מטופלים בדריכות מתקשים לשתף פעולה בתהליך הטיפול" },
                { title: "תגובות רגשיות מוגברות", desc: "תגובות רגשיות חזקות המשפיעות על איכות הטיפול" },
                { title: "מתח גופני", desc: "מתח פיזי המקשה על ביצוע הטיפול בדיוק" },
                { title: "הארכת זמן הטיפול", desc: "זמן טיפול ממושך בגלל הדריכות והמתח" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-secondary rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-accent rounded-lg border-2 border-primary/20">
              <p className="text-center text-lg font-semibold">
                אנחנו פועלים לפני נקודת הכניסה הזו
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            איך המערכת מיושמת בפועל
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "הפחתת חרדה רפואית",
                desc: "במקום מעבר חד בין אזור ההמתנה לחדר הטיפול, נוצרת חוויה מתווכת המאפשרת שינוי הדרגתי במצב העוררות.",
                image: useCaseImages.waiting,
              },
              {
                title: "הסחת קשב מבוקרת",
                desc: "מערכת הקשב האנושית מוגבלת במשאביה. כאשר הקשב מופנה באופן מלא לגירוי חווייתי מובנה, פוחתת ההתמקדות בגורם המעורר דריכות.",
                image: useCaseImages.doctor,
              },
              {
                title: "ויסות עוררות",
                desc: "חוויית צפייה סוחפת ומוגדרת מאפשרת יצירת סביבה חושית יציבה, שאינה דורשת מאמץ קוגניטיבי.",
                image: useCaseImages.injection,
              },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            העקרונות המקצועיים של המערכת
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                num: "1",
                title: "עומס קוגניטיבי מופחת",
                desc: "Reduced Cognitive Load - תכנון ממוקד להפחתת דרישות קוגניטיביות",
              },
              {
                num: "2",
                title: "יציבות תחושתית",
                desc: "Sensory Stability - סביבה חושית יציבה וניתנת לחיזוי",
              },
              {
                num: "3",
                title: "צמצום מרחב חיצוני",
                desc: "Controlled Environmental Containment - סביבה מוגבלת ומבוקרת",
              },
              {
                num: "4",
                title: "מעבר מצבי מדורג",
                desc: "State Transition Design - מעבר חלק בין מצבי עוררות",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold text-lg">
                    {item.num}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Gallery */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            שימושים בתחומים שונים
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "לפני זריקה", image: useCaseImages.injection },
              { title: "תהליך לפני שינה", image: useCaseImages.sleep },
              { title: "מרפאת שיניים", image: useCaseImages.dental1 },
              { title: "בדיקת אולטרסאונד", image: useCaseImages.ultrasound },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-center font-semibold text-lg">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={useCaseImages.doctor}
                alt="VMC-VR"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">מי אנחנו?</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                VMC הוקמה בשנת 2021 ופיתחה את VR-TheraFix מתוך זיהוי חוזר של קושי נפוץ במרפאות: מטופלים רבים מגיעים לטיפול או לבדיקה כאשר הגוף כבר במצב של דריכות מוגברת.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                במצבים אלה, ההתמודדות מתרחשת בזמן אמת בחדר הטיפולים, ולעיתים משפיעה על תחילת הפעולה, על שיתוף הפעולה ועל העומס התפעולי.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                הגישה שלנו אינה טיפולית־רגשית, אלא תפעולית־קלינית: יצירת תנאי פתיחה יציבים יותר לפעולה הרפואית, כחלק מובנה מתהליך העבודה.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            שאלות נפוצות
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors text-right"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedFaq === i ? "rotate-180" : ""
                    }`}
                  />
                  <span className="font-semibold text-lg">{item.question}</span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 py-4 bg-secondary border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              יש לך שאלה שלא קיבלת עליה תשובה?
            </p>
            <Button size="lg" className="rounded-lg">
              צור קשר
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">צור קשר</h3>
              <p className="text-muted-foreground mb-2">VMC LTD.</p>
              <p className="text-muted-foreground mb-2">מחנות בנין 150, תל אביב</p>
              <p className="text-muted-foreground mb-2">office@vmc-vr.com</p>
              <p className="text-muted-foreground">+97252-6839363</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">קישורים</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    מחקרים
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    אודות
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    צור קשר
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">עקבו אחרינו</h3>
              <div className="flex gap-4">
                {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
            <p>© 2026 Innovative Tech Solutions. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
