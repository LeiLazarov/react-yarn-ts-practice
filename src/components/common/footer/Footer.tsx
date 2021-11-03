import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #f4f7f9;
`;

const FooterSection1 = styled.div`
    background-color: #f4f7f9;
`;

const ContentSection1 = styled.div`
    padding: 20px 80px;
`;

const CustomP1 = styled.p`
    font-family: Gotham;
    font-size: 22px;
    font-weight: 600;
    margin: 5px 0;
`;

const CustomP2 = styled.p`
    font-family: Gotham;
    font-size: 16px;
    font-weight: 350;
    margin: 5px 0;
`;

const CustomP3 = styled.p`
    font-family: Gotham;
    font-size: 14px;
    font-weight: 325;
`;

const CustomLink = styled.a`
    text-decoration: underline;
    &:hover {
        cursor: pointer;
        background-color: #eaedf4;
    }
`;

const FooterSection2 = styled.div`
    background-color: #646974;
    color: #fff;
    padding: 10px 0;
`;

const ContentSection2 = styled.div`
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    max-width: $screen-lg;
    margin: 0 auto;
    padding: 0 80px;
`;

const Footer: React.FC = () => {
    return (
        <footer>
            <FooterSection1>
                <ContentSection1>
                    <CustomP1>Do you need help?</CustomP1>
                    <CustomP2>
                        Call us on <strong>13 77 88</strong> or <CustomLink>get in touch with us</CustomLink>
                    </CustomP2>
                </ContentSection1>
            </FooterSection1>
            <FooterSection2>
                <ContentSection2>
                    <CustomP3>
                        We pay respect to the Traditional Custodians and First Peoples of NSW, and acknowledge their
                        continued connection to their country and culture.
                    </CustomP3>
                </ContentSection2>
            </FooterSection2>
        </footer>
    );
};

export default Footer;
