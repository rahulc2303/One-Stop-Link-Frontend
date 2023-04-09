import React from "react";
import "./publishanddiscard.css";

const Publishanddiscard = (props) => {

  const { bioPageDetails, profileName, profileDescription, cardShape, cardColor, linkColor, backGroundColor, textFont,
    textColor, instagramUrl, facebookUrl, twitterUrl, youtubeUrl, linkedInUrl, snapChatUrl, githubUrl, pinterestUrl
  } = props;


  if (props.show) {
    return null;
  }



  const changesDone = () => {
    if (
      bioPageDetails.page_bio_profile_name !== profileName ||
      bioPageDetails.page_bio_profile_description !== profileDescription ||
      bioPageDetails.page_link_card_shape !== cardShape ||
      bioPageDetails.page_link_card_color !== cardColor ||
      bioPageDetails.page_link_text_color !== linkColor ||
      bioPageDetails.page_bio_profile_background_color !== backGroundColor ||
      bioPageDetails.page_text_font !== textFont ||
      bioPageDetails.page_text_font_color !== textColor ||
      bioPageDetails.page_social_media_instagram_url !== instagramUrl ||
      bioPageDetails.page_social_media_facebook_url !== facebookUrl ||
      bioPageDetails.page_social_media_twitter_url !== twitterUrl ||
      bioPageDetails.page_social_media_youtube_url !== youtubeUrl ||
      bioPageDetails.page_social_media_linkedin_url !== linkedInUrl ||
      bioPageDetails.page_social_media_snapchat_url !== snapChatUrl ||
      bioPageDetails.page_social_media_github_url !== githubUrl ||
      bioPageDetails.page_social_media_pinterest_url !== pinterestUrl

    ) {
      return true
    } else {
      return false
    }
  }


  return (
    changesDone() ?
      <>
        <div className="flex-top-publish-page-pop-up-rendr" >
          <div className="conntanner-for-btn--publlish-and-doiscard">
            <h2 style={{ color: "#fff" }}>Unsaved Changes</h2>
            <div className="flex-new-btns-pub-nad-delete">
              <button className="discard-btn-at-top" onClick={props.discardChanges}>Discard</button>
              <button className="Pubblish-btn-at-top">Publish</button>
            </div>
          </div>

        </div>
      </>
      :
      null





  );
};

export default Publishanddiscard;
