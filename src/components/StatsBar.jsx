import useReveal from "../Hooks/useReveal";
import { IconByName } from "./Icons";
import { STATS } from "../data/stats";

export default function StatsBar() {
  useReveal();
  return (
    <div className="stats-bar" aria-label="Company statistics">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div
              key={s.id}
              className={`stats-item reveal reveal-delay-${i + 1}`}
            >
              <div className="stats-icon" aria-hidden="true">
                <IconByName name={s.iconName} />
              </div>
              <div className="stats-num">{s.num}</div>
              <div className="stats-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
