import React, { useState, useEffect } from "react";
import { CookieConsentWrapper, Text, BtnAcceptArea } from "./style.js";
import DefaultButton from "../DefaultButton";
import { MAIN_COLOR_MEDIUM } from "../../constants/defaultStyleProps.js";

const CookieConsent = () => {
    const consentPropertyName = "stopwatchtask_accept_cookies";
    const initialState = !localStorage.getItem(consentPropertyName) === true 

    const [shouldShowPopup, setShouldShowPopup] = useState(initialState);

    console.log(
        "mmm",
        shouldShowPopup,
        localStorage.getItem(consentPropertyName) === true
    );
    useEffect(() => {
        console.log("Aaa", shouldShowPopup);
        localStorage.setItem(consentPropertyName, true);
    }, [shouldShowPopup]);

    const acceptCookieConsent = () => {
        console.log("clicou");
        setShouldShowPopup(false);
    };

    return (
        <CookieConsentWrapper
            className="cookieConsent"
            shouldShowPopup={shouldShowPopup}
        >
            <Text>
                This website uses cookies, which are necessary for its
                functioning and required to achieve the purposes of it. You
                accept the use of cookies or other identifiers by closing or
                dismissing this notice , by clicking on "Accept" or by
                continuing to browse otherwise.
            </Text>
            <BtnAcceptArea>
                <DefaultButton
                    borderColor={MAIN_COLOR_MEDIUM}
                    bgcolor={MAIN_COLOR_MEDIUM}
                    onClick={() => {
                        acceptCookieConsent();
                    }}
                >
                    Accept
            </DefaultButton>
            </BtnAcceptArea>

        </CookieConsentWrapper>
    );
};
export default CookieConsent;
