import Link from "next/link";
import { specialTracks } from "../data/education";
import { HomeArtwork } from "./HomeArtwork";
import { ThemeIcon } from "./ThemeIcon";

export function SpecialTracks({ localLinks = false }: { localLinks?: boolean }) {
  return (
    <div className="special-tracks-grid">
      {specialTracks.map((track, index) => (
        <Link className={`special-track-card track-${track.art}`} href={`${localLinks ? "" : "/kelas-khusus"}#${track.id}`} key={track.id} data-reveal>
          <div className="special-track-art">
            <span className="special-track-index" aria-hidden="true">0{index + 1}</span>
            <HomeArtwork kind={track.art} />
          </div>
          <div className="special-track-copy">
            <span className="special-track-program">{track.program}</span>
            <h3>{track.name}</h3>
            <p>{track.summary}</p>
            <span className="special-track-link">Kenali kelas ini <ThemeIcon name="arrow" /></span>
          </div>
        </Link>
      ))}
    </div>
  );
}
