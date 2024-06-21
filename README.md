This component is designed to support user feedback. It is designed to be portable so that is can be included in any web page so that users can submit text feedback as well as a star rating (out of 5 stars) for the page they are currently on. The url of the page the feedback was left on is included with the feedback, as well as the username of the user who left it.


USAGE:
import:
    import { FeedbackContainer } from '../components/feedback-container'
tag:
    <FeedbackContainer />
commands:
    to install dependencies:
    npm i
    to run program:
    npm run dev

test pages:

http://localhost:3000/articles/article2
http://localhost:3000/articles/article1
http://localhost:3000/articles/home

api url:

https://edn1o3t351.execute-api.us-east-1.amazonaws.com/dev/TC-Feedback-Manager?url=http://localhost:3000/articles/article1