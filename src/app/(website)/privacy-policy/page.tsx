import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className='flex flex-col p-28 gap-10'>
            <h1 className='text-center text-4xl font-bold'>Privacy Policy</h1>
            <div className="mt-20">
                <p>Effective Date 1/1/24</p>

                <p className='mt-5'>
                    At Portfol.io, we are committed to protecting the privacy and security of 
                    your personal information. This Privacy Policy outlines the types of information 
                    we collect, how we use it, and the measures we take to safeguard your privacy.
                </p>

                <h3 className="font-medium mt-5">Information We Collect:</h3>
                <ul className='mt-5 list-disc list-inside'>
                    <li>
                        Information: We may collect personal information such as your name, email 
                        address, contact information, and payment details when you register for an account 
                        or use our services.
                    </li>
                    <li>
                        Usage Information: We collect information about your interactions with our 
                        platform, including your browsing activity, preferences, and device information.
                    </li>
                </ul>

                <h3 className='font-medium mt-5'>How We Use Your Information:</h3>
                <ul className='mt-5 list-disc list-inside'>
                    <li>
                        To Provide Services: We use your information to deliver our services, 
                        process transactions, and communicate with you about your account.
                    </li>
                    <li>
                        To Improve User Experience: We analyze usage data to enhance our platform, 
                        personalize your experience, and provide relevant content and recommendations.
                    </li>
                    <li>
                        To Ensure Security: We employ security measures to protect against unauthorized access, 
                        misuse, or alteration of your information.
                    </li>
                </ul>

                <h3 className='font-medium mt-5'>Information Sharing:</h3>
                <ul className='mt-5 list-disc list-inside'>
                    <li>
                        Third-Party Service Providers: We may share your information with trusted third-party 
                        service providers who assist us in operating our platform, processing payments, or 
                        delivering services.
                    </li>
                    <li>
                        Legal Compliance: We may disclose your information to comply with legal obligations, 
                        enforce our policies, or respond to legal requests.
                    </li>
                </ul>

                <h3 className='font-medium mt-5'>Your Choices:</h3>
                <ul className='mt-5 list-disc list-inside'>
                    <li>
                        Opt-Out: You can opt out of receiving marketing communications from us by following the instructions 
                        provided in our communications or by contacting us directly.
                    </li>
                    <li>
                        Access and Update: You can access and update your personal information by logging into your account or contacting us.
                    </li>
                </ul>

                <h3 className='font-medium mt-5'>Data Retention:</h3>
                <p className="mt-5">
                    We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
                </p> 
                
                <h3 className="font-medium mt-5">Privacy Rights:</h3> 
                <p className="mt-5">
                    You may have certain privacy rights under applicable laws, such as the right to access, correct, or delete your personal information.
                </p>

                <h3 className="font-medium mt-5">Updates to Privacy Policy:</h3>
                <p className="mt-5">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website or through other appropriate channels.
                </p>

                <h3 className="font-medium mt-5">Contact Us:</h3>
                <p className="mt-5">
                    If you have any questions or concerns about our Privacy Policy or practices, please contact us at info@portfolike.com.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;