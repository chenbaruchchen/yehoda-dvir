import TestimonialCard11 from "./testimonial-card11";
import "./artist-list.css";

const ArtistList = (props) => {
  return (
    <div className="artist-list-container">
      <div className="artist-list-testimonial">
        <div className="artist-list-container1">
          <h1 className="artist-list-text">
            <span>אמני משפחת דביר</span>
            <br></br>
            <span></span>
          </h1>
          <span className="artist-list-text3">
            <span>
              משפחה יוצרת עושה אומנותמשפחה יוצרת עושה אומנותמשפחה יוצרת עושה
              אומנותמשפחה יוצרת עושה אומנותמשפחה יוצרת עושה אומנותמשפחה יוצרת
              עושה אומנותמשפחה יוצרת עושה אומנותמשפחה יוצרת עושה אומנותמשפחה
              יוצרת עושה אומנות
            </span>
          </span>
          <div className="artist-list-container2">
            <TestimonialCard11
              setChosen={props.setChosen}
              picture_src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
            ></TestimonialCard11>
            <TestimonialCard11
              setChosen={props.setChosen}
              rootClassName="rootClassName"
            ></TestimonialCard11>
            <TestimonialCard11
              setChosen={props.setChosen}
              picture_src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
            ></TestimonialCard11>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistList;
