import ArtImage from './ArtImage';

export default function StorySection() {
  return (
    <section className="story" id="story">
      <div className="wrap">
        <div className="story-image">
          <ArtImage src="/images/story.jpg" alt="Sonia's painting featured in the studio story" gradientClass="story-tone" />
        </div>
        <div className="story-text">
          <p className="quote display">
            Why do certain images stay with us? Not just visually, but emotionally — something
            feels romantic, or heavy, or quietly familiar, even from a completely different time.
          </p>
          <p>
            Sonia trained as a visual historian before she became a painter, and it shows in the
            work: every piece starts from a real place or a half-remembered one, then gets
            rebuilt from color and instinct rather than reference photos.
          </p>
          <p>
            The studio is small on purpose. Paintings are made one at a time, and each one
            leaves once — there are no reprints and no editions.
          </p>
          <div className="sign">— Sonia, founder</div>
        </div>
      </div>
    </section>
  );
}
