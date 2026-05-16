import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * VMC-VR TheraFix — Homepage
 * Design concept: "המעבר השקט" (The Quiet Transition)
 * Premium medical wellness aesthetic, Hebrew RTL, no VR headset imagery.
 */
export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const logoUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/לוגומוצרללארקע_52437f3a.png";
  const heroVideoUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/vmc-vr-hero-bg-v2_6b29c25d.mp4";

  const faqItems = [
    {
      question: "האם זה טיפול נפשי?",
      answer:
        "לא. VR-TheraFix אינו טיפול נפשי ואינו מיועד לאבחון או טיפול בהפרעות נפשיות. זהו כלי ויסות פיזיולוגי תפעולי — הוא פועל ברמה של מערכת העצבים האוטונומית כדי ליצור תנאי פתיחה יציבים לפני פעולה רפואית.",
    },
    {
      question: "האם הכלי נבדק מחקרית?",
      answer:
        "הכלי מבוסס על שיטות וטכניקות טיפול הנתמכות מחקרית. בוצעו עשרות פיילוטים במרפאות שונות עם שינויים משמעותיים במדדי HRV ובדפוסי פעילות מוחית.",
    },
    {
      question: "מאיזה גיל ניתן להשתמש?",
      answer:
        "הגיל המינימלי המאושר לשימוש הוא 12 ומעלה, בעיקר מסיבות טכניות — המכשיר והעדשות גדולים מידי לממדי ראש של ילד.",
    },
    {
      question: "מה ההבדל ממכשיר VR רגיל?",
      answer:
        "VR-TheraFix הוא כלי תפעולי-מבני עם פרוטוקול מסודר להפחתת דריכות. הוא מופעל לזמן מדויק בשלבים מתוכננים. זה לא סרטון מרגיע — זו מערכת מובנית.",
    },
    {
      question: "מה העלויות?",
      answer:
        "התשלום הוא עבור רשיון שימוש חודשי ללא הגבלה בשימושים. הרשיון כולל ליווי צוות, שירות טכני והגעה פיזית במידת הצורך.",
    },
    {
      question: "איך המערכת משתלבת בתהליך העבודה?",
      answer:
        "השימוש מתבצע בזמן ההמתנה הקיים. המערכת מופעלת על ידי צוות המרפאה באופן קל ופשוט, ללא נוכחות הרופא וללא שינוי בזרימת העבודה.",
    },
    {
      question: "איך יודעים אם המערכת מתאימה למרפאה שלנו?",
      answer:
        "המערכת מתאימה במיוחד למרפאות עם זמן המתנה מובנה ולסביבות בהן נתקלים במטופלים במצב דריכות. ניתן לבצע בדיקת התאמה ללא התחייבות.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">

      {/* ── Navigation ───────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <img src={logoUrl} alt="VR-TheraFix" className="h-11 w-auto" />
          <div className="hidden md:flex items-center gap-8">
            <a href="#solution" className="text-sm font-medium hover:text-primary transition-colors">איך זה עובד</a>
            <a href="#principles" className="text-sm font-medium hover:text-primary transition-colors">העקרונות</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">שאלות נפוצות</a>
            <a href="#contact">
              <Button className="rounded-xl px-6" style={{ background: "var(--gold)", color: "#fff", border: "none" }}>
                לתיאום הדגמה
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover object-center">
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 container text-center text-white max-w-3xl">
          {/* Breathing accent */}
          <p className="animate-breathe inline-block text-sm font-medium tracking-widest mb-6 px-4 py-1.5 rounded-full border border-white/30 bg-white/10"
             style={{ color: "var(--gold-light)" }}>
            VR-TheraFix
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            הטיפול מתחיל לפני שהרופא נכנס לחדר
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light opacity-90 leading-relaxed">
            ויסות טרום-טיפולי — הכנה פיזיולוגית שמשנה את חוויית הטיפול כולה
          </p>
          <a href="#contact">
            <Button
              size="lg"
              className="rounded-xl text-base px-10 py-6 border-0 font-semibold shadow-lg"
              style={{ background: "var(--gold)", color: "#fff" }}
            >
              לתיאום הדגמה
            </Button>
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* ── Section 2: Problem ───────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-sm font-semibold tracking-widest mb-4 uppercase" style={{ color: "var(--tension)" }}>האתגר</p>
            <h2 className="text-center font-black mb-6">האתגר לא מתחיל בחדר הטיפול</h2>
            <p className="text-lg text-muted-foreground mb-16 text-center max-w-2xl mx-auto leading-relaxed">
              מערכת העצבים כבר פעילה עוד לפני שהטיפול מתחיל. אנחנו פועלים ברגע שלפני.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "😰", title: "מתח גופני ורגשי", desc: "מטופלים מגיעים כשהגוף כבר במצב דריכות מוגברת — דופק מואץ, נשימה רדודה" },
                { icon: "🔄", title: "קושי לשתף פעולה", desc: "קשה לצוות לעבוד עם מטופל שמערכת העצבים שלו במצב הגנתי" },
                { icon: "⏳", title: "הארכת זמני טיפול", desc: "הדריכות מאריכה את הפעולה הרפואית וגוזלת זמן יקר מהצוות" },
                { icon: "😓", title: "תגובות לא צפויות", desc: "תגובות עוצמתיות במהלך הפעולה שניתן היה למנוע בהכנה מתאימה" },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl border-2 text-center" style={{ borderColor: "var(--calm)", background: "var(--accent)" }}>
              <p className="text-lg font-semibold" style={{ color: "var(--calm)" }}>
                "מערכת העצבית כבר פעילה עוד לפני שהטיפול מתחיל. אנחנו פועלים ברגע שלפני."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Timeline Solution ────────────────────────────────── */}
      <section id="solution" className="py-24 md:py-32 bg-card">
        <div className="container">
          <p className="text-center text-sm font-semibold tracking-widest mb-4 uppercase" style={{ color: "var(--calm)" }}>הפתרון</p>
          <h2 className="text-center font-black mb-6">מדריכות לרוגע — בשלושה שלבים</h2>
          <p className="text-lg text-muted-foreground mb-20 text-center max-w-2xl mx-auto leading-relaxed">
            מעבר מדורג ומבוקר שמכין את המטופל פיזיולוגית לפני הטיפול
          </p>

          <div className="relative">
            {/* Gradient timeline bar */}
            <div
              className="hidden md:block absolute top-[2.25rem] right-[16%] left-[16%] h-1 rounded-full"
              style={{ background: "linear-gradient(to left, var(--calm), #E8C462, var(--tension))" }}
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01", emoji: "🔴", title: "הגעה",
                  dot: "var(--tension)",
                  bg: "rgba(212,149,106,0.08)", border: "rgba(212,149,106,0.3)",
                  desc: "המטופל מגיע למרפאה. הגוף במצב דריכות: דופק מואץ, נשימה רדודה, מחשבות מרוצות.",
                },
                {
                  step: "02", emoji: "🟡", title: "מעבר",
                  dot: "#C8A84B",
                  bg: "rgba(200,168,75,0.08)", border: "rgba(200,168,75,0.3)",
                  desc: "חוויה מובנית ומתווכת. הקשב מופנה, העוררות יורדת בהדרגה, הגוף עובר לוויסות.",
                },
                {
                  step: "03", emoji: "🟢", title: "כניסה לטיפול",
                  dot: "var(--calm)",
                  bg: "rgba(91,143,140,0.08)", border: "rgba(91,143,140,0.3)",
                  desc: "המטופל נכנס לחדר הטיפול במצב פיזיולוגי שונה: רגוע, נוכח, מוכן לשתף פעולה.",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div
                    className="w-9 h-9 rounded-full mb-8 z-10 flex items-center justify-center shadow-md text-white text-sm font-bold"
                    style={{ background: item.dot }}
                  >
                    {i + 1}
                  </div>
                  <div className="p-8 rounded-2xl border w-full" style={{ background: item.bg, borderColor: item.border }}>
                    <div className="text-3xl mb-3">{item.emoji}</div>
                    <p className="text-xs font-bold text-muted-foreground mb-2">שלב {item.step}</p>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Stats ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ background: "var(--foreground)" }}>
        <div className="container">
          <p className="text-center text-sm font-semibold tracking-widest mb-4 uppercase" style={{ color: "var(--gold-light)" }}>מספרים שמדברים</p>
          <h2 className="text-center font-black mb-16 text-white">מה קורה כשמטופלים מגיעים מוכנים</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "↓ 40%", label: "ירידה ברמות חרדה טרום-טיפולית", icon: "📉" },
              { num: "−8 דק׳", label: "קיצור ממוצע בזמן הטיפול", icon: "⏱️" },
              { num: "92%", label: "מהמטופלים דיווחו על חוויה חיובית יותר", icon: "👥" },
              { num: "↑ 78%", label: "עלייה בנכונות לחזור לטיפול המשך", icon: "🔁" },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="text-4xl font-black mb-3" style={{ color: "var(--gold-light)" }}>{item.num}</div>
                <p className="leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Principles ────────────────────────────────────────── */}
      <section id="principles" className="py-24 md:py-32 bg-background">
        <div className="container">
          <p className="text-center text-sm font-semibold tracking-widest mb-4 uppercase" style={{ color: "var(--calm)" }}>הבסיס המדעי</p>
          <h2 className="text-center font-black mb-6">על מה זה נשען</h2>
          <p className="text-lg text-muted-foreground mb-16 text-center max-w-2xl mx-auto leading-relaxed">
            ארבעה עקרונות מקצועיים שמנחים את עיצוב הפרוטוקול
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🧠", en: "Reduced Cognitive Load",              title: "עומס קוגניטיבי מופחת", desc: "תכנון ממוקד להפחתת דרישות קוגניטיביות — הגוף מתמקד בחוויה במקום בחרדה" },
              { icon: "🌊", en: "Sensory Stability",                    title: "יציבות תחושתית",       desc: "סביבה חושית יציבה וניתנת לחיזוי שמאפשרת למערכת העצבים להירגע" },
              { icon: "🏠", en: "Controlled Environmental Containment", title: "צמצום מרחב חיצוני",   desc: "סביבה מוגבלת ומבוקרת שמפחיתה גירויים חיצוניים מאיימים" },
              { icon: "🔄", en: "State Transition Design",              title: "מעבר מצבי מדורג",    desc: "מעבר חלק ומדורג בין מצבי עוררות — ממתח לרוגע בצורה טבעית" },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 p-7 bg-card rounded-2xl border border-border hover:border-primary/40 transition-colors group">
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl text-2xl group-hover:scale-110 transition-transform" style={{ background: "var(--accent)" }}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{item.en}</p>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#" className="text-sm font-semibold hover:underline" style={{ color: "var(--calm)" }}>לפירוט המדעי המלא ←</a>
          </div>
        </div>
      </section>

      {/* ── Section 6: Use Cases ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container">
          <p className="text-center text-sm font-semibold tracking-widest mb-4 uppercase" style={{ color: "var(--tension)" }}>שימושים</p>
          <h2 className="text-center font-black mb-16">מרפאות שכבר משתמשות בגישה</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "רפואת שיניים",          emoji: "🦷", quote: "\"המטופלים שלנו מגיעים לכיסא הרבה יותר רגועים. זה שינה את כל האווירה בקליניקה\"",              who: "ד״ר כהן, מרפאת שיניים" },
              { title: "אונקולוגיה",            emoji: "🎗️", quote: "\"בטיפולים הכימותרפיים, ההכנה הפיזיולוגית עשתה הבדל אמיתי לאיכות חיי המטופלים\"",      who: "צוות אונקולוגיה, מרכז רפואי" },
              { title: "רפואת ילדים",           emoji: "👶", quote: "\"ילדים שנכנסים לבדיקה מוכנים ורגועים — שיתוף הפעולה פשוט אחר לגמרי\"",             who: "אחות ראשית, מחלקת ילדים" },
              { title: "כירורגיה זעיר-פולשנית", emoji: "🔬", quote: "\"הצוות שלנו ביקש להמשיך את השימוש אחרי שבועיים ראשונים — זה אמר הכול\"",          who: "מנהל ניתוחים יום, בית חולים" },
            ].map((item, i) => (
              <div key={i} className="p-7 rounded-2xl border border-border bg-background hover:shadow-md transition-shadow flex flex-col">
                <div className="text-4xl mb-4 text-center">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-4 text-center">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">{item.quote}</p>
                <p className="text-xs text-muted-foreground mt-4 font-semibold">{item.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: FAQ ───────────────────────────────────────────────── */}
      <section id="faq" className="py-24 md:py-32 bg-background">
        <div className="container max-w-3xl">
          <p className="text-center text-sm font-semibold tracking-widest mb-4 uppercase" style={{ color: "var(--calm)" }}>שאלות ותשובות</p>
          <h2 className="text-center font-black mb-16">שאלות נפוצות</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-border rounded-2xl overflow-hidden bg-card">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-secondary/60 transition-colors text-right"
                >
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 ml-3 transition-transform ${
                      expandedFaq === i ? "rotate-180" : ""
                    }`}
                    style={{ color: "var(--calm)" }}
                  />
                  <span className="font-semibold text-lg">{item.question}</span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 py-5 border-t border-border" style={{ background: "var(--accent)" }}>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: CTA / Contact ─────────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 text-white" style={{ background: "var(--calm)" }}>
        <div className="container max-w-2xl text-center">
          <h2 className="font-black mb-6 text-white leading-tight">
            רוצים לראות איך זה עובד במרפאה שלכם?
          </h2>
          <p className="text-xl mb-12 leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            נשמח להראות לכם הדגמה חיה ולבדוק יחד אם הגישה מתאימה
          </p>
          <form
            className="rounded-2xl p-8 text-right"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.9)" }}>שם מלא</label>
                <input
                  type="text"
                  placeholder="ד״ר ישראל ישראלי"
                  className="w-full px-4 py-3 rounded-xl placeholder-white/40 focus:outline-none transition-all text-white"
                  style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.9)" }}>שם המרפאה</label>
                <input
                  type="text"
                  placeholder="מרפאת הדוגמה"
                  className="w-full px-4 py-3 rounded-xl placeholder-white/40 focus:outline-none transition-all text-white"
                  style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.9)" }}>טלפון</label>
              <input
                type="tel"
                placeholder="050-0000000"
                className="w-full px-4 py-3 rounded-xl placeholder-white/40 focus:outline-none transition-all text-white"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
              />
            </div>
            <Button
              size="lg"
              type="submit"
              className="w-full rounded-xl text-lg py-6 font-bold border-0 shadow-lg"
              style={{ background: "var(--gold)", color: "#fff" }}
            >
              לתיאום הדגמה
            </Button>
          </form>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="py-12 text-white" style={{ background: "var(--foreground)" }}>
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={logoUrl} alt="VR-TheraFix" className="h-10 w-auto mb-4 brightness-0 invert" />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                ויסות פיזיולוגי טרום-טיפולי — הסטנדרט החדש להכנת מטופלים לפני טיפול רפואי
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">ניווט</h3>
              <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                <li><a href="#solution" className="hover:text-white transition-colors">איך זה עובד</a></li>
                <li><a href="#principles" className="hover:text-white transition-colors">העקרונות</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">שאלות נפוצות</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">תיאום הדגמה</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">צור קשר</h3>
              <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                <li>VMC LTD.</li>
                <li>מחנות בנין 150, תל אביב</li>
                <li><a href="mailto:office@vmc-vr.com" className="hover:text-white transition-colors">office@vmc-vr.com</a></li>
                <li><a href="tel:+972526839363" className="hover:text-white transition-colors">+972 52-683-9363</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm" style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.35)" }}>
            <p>© 2026 VMC LTD. כל הזכויות שמורות.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
              <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
