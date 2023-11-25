// content.js

import React from 'react';
import './content.css';

function Content() {

  return (
    <div className='Document'>
    <h1 style={{"color": "#3e2550"}}><b>Documentation</b></h1>
    <br/>
    <div className="Headingg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h3><b>Resignation Application Process</b></h3>
    </div>
    <br/>

    <div class="section">
        <h5><b>STEP 1: Login to Your Employee Dashboard</b></h5>
        <p>
             To apply for resignation, you first need to log in to your employee dashboard. The login option is available at the top right corner of the landing page. When you click on the login option, the login page will become visible. Visit the login page and enter your credentials to access your account. Ensure that you enter the correct username and password.
        </p>
        <p class="highlight">Example:</p>
        <img src="img/Documentation/doc1.jpeg" alt="My Info Section Screenshot" />
        <br/>
        <br/>
    </div>
    <br/>
    <div class="section">
        <h5><b>STEP 2: Navigate through Dashboard</b></h5>
        <p>
         After successfully logging in, you'll be directed to the dashboard page, where you can explore the various sections available. Here, you can access a range of features and information to manage your employment. "My Info Page" section provides access to your personal information, allowing you to review and edit your details. In the "Resignation Submission Portal", you can initiate the resignation process by filling out the necessary details and submitting your resignation request. "Contact Human Resources" section helps you to get in touch with the HR department? This section provides a direct line of communication with your organization's human resources team. You can seek assistance, ask questions, or address HR-related matters.
        </p>
        <p class="highlight">Example:</p><br/>
        <img src="img/Documentation/doc3.jpeg" alt="My Info Section Screenshot" style={{width:"600px", height:"400px", border:"1px solid #3e2550"}}/>
    </div>
    <br/>
    <div class="section">
        <h5><b>STEP 3: Go to My Info Section</b></h5>
        <p>
        Navigate to the "My Info" section of your employee dashboard. This is where you can find various parts of information related to your employment. Here, you can edit some of your details, change your password if necessary, check the notifications, and apply for resignation. The resignation form will appear once you select "Apply for Resignation" option to initiate the resignation application process.
        </p>
        <p class="highlight">Example:</p><br/>
        <img src="img/Documentation/doc2.jpeg" alt="My Info Section Screenshot" style={{width:"600px", border:"1px solid #3e2550"}}/>
        <br/>
        <br/>
        <br/>
        <div class="section">
            <p>
            <b>NOTE: </b> You can go to the "Resignation Submission Portal" section directly from your dashboard and continue with Step 4.
            </p>
        </div>
    </div>

    <div class="section">
        <h5><b>STEP 4: Fill the Form Details and Submit</b></h5>
        <p>
          Once you click on "Apply for resignation", resignation form appears that requires specific details.  Personal information, including your name, employee ID, and other related option will be internally specified. Check whether your details are correct and proceed. Enter the name of your current manager. Next, detail your reason for resigning, whether it's driven by career changes, personal considerations, or another relevant factor. Specify your intended last working day, as this information is essential for the company's transition planning.  Once you've meticulously filled out the form with accurate and comprehensive information, conclude by clicking the 'Apply' button. Your resignation request will be submitted. Ensure that after filling the form you fill the exit-survey form. 
        </p>
        <p class="highlight">Example:</p>
        <br/>
        <img src="img/Documentation/doc4.jpeg" alt="Apply for Resignation Option Screenshot" style={{width:"300px",height:"400px", border:"1px solid #3e2550"}}/>
        
    </div>

    <div class="section">
        <h5><b>STEP 5: Fill the Exit-Survey Form</b></h5>
        <p>
          As part of your departure process, you will have the opportunity to share your insights and experiences through the Exit-Survey Form. This survey is designed to gather valuable feedback about your time with the organization. To complete it, start by providing your  employee ID, and contact information, ensuring that your feedback is associated with your profile. Next, specify your primary reason for resignation, which is crucial for the organization's understanding of employee attrition. Use the feedback and comments section to express your thoughts, suggestions, and observations, offering constructive insights to improve various aspects of the work environment and company policies.  Your input in the Exit-Survey Form plays a pivotal role in shaping the organization's future initiatives and improvements, making your contribution meaningful as you transition to new opportunities.
        </p>
        <p class="highlight">Example:</p><br/>
        <img src="img/Documentation/doc5.jpeg" alt="My Info Section Screenshot" style={{width:"300px", height:"400px", border:"1px solid #3e2550"}}/>
    </div>
    </div>
  );
}

export default Content;
