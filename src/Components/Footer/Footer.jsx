import "./FooterStyle.css"
import facebooklogo from "./../../assets/facebooklogo.png"
import instagramlogo from "./../../assets/instagramlogo.png"
import linkedinlogo from "./../../assets/linkedinlogo.png"
import Vector from "./../../assets/Vector.png"
import mheLogo from "./../../assets/mohe.png"
import phone from "./../../assets/phone.png"
import envelope from "./../../assets/envelope.png"
import MapPin from "./../../assets/MapPin.png"

    const Footer = () => {
        return (
        <footer> 
                <div className="footer_container">
                <div className="footer_logo first">
                    <img className="footer_logo_img" src={mheLogo} alt="logo of MHE in SAR" />
                    <div className="socialIcons first">
                        <a href=""><img src={Vector} alt="" /></a>
                        <a href=""><img src={linkedinlogo} alt="" /></a>
                        <a href=""><img src={instagramlogo} alt="" /></a>
                        <a href=""><img src={facebooklogo} alt="" /></a>
                        
                    </div>
                </div>        
                <ul className="footer_List second">
                    <li className="footer_li"><a className="footer_anchor" href="">القوانين</a></li>
                    <li className="footer_li"><a className="footer_anchor" href="">آخر الأخبار</a></li>
                    <li className="footer_li"><a className="footer_anchor" href="">الجامعات والمعاهد</a></li>
                    <li className="footer_li"><a className="footer_anchor" href="">قرارات مجلس التعليم العالي</a></li>
                    <li className="footer_li"><a className="footer_anchor" href="">التقدم لمفاضلات القبول الجامعي</a></li>
                </ul>
                <ul className="footer_List third">
                    <li className="footer_li"><a className="footer_anchor" href="">إعلانات</a></li>
                    <li className="footer_li"><a className="footer_anchor" href="">المراسيم</a></li>
                    <li className="footer_li"><a className="footer_anchor" href="">مواقع هامة</a></li>
                    <li className="footer_li"><a className="footer_anchor" href="">الأسئلة المتكررة</a></li>
                    <li className="footer_li"><a className="footer_anchor" href="">فعاليات ونشاطات</a></li>
                </ul>
                <ul className="footer_List fourth">
                    <li className="footer_li"><a className="footer_anchor Info" href="#"><img src={envelope} alt="" /> mohe@info.sy</a></li>
                    <li className="footer_li"><a className="footer_anchor Info" href="#"><img src={phone} alt="" /> +962 955741256</a></li>
                    <li className="footer_li"><a className="footer_anchor Info" href="#"><img src={MapPin} alt="" />الموقع</a></li>
                </ul>
                </div>
                <div className="footer_End">
                    <h1>جميع الحقوق محفوظة لوزارة التعليم العالي في الجمهورية العربية السورية - 2023 </h1>
                </div>
        </footer>
        
        );
    };
    

export default Footer;