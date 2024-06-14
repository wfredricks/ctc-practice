import { Amplify } from "aws-amplify";

Amplify.configure({
    Auth: {
        Cognito: {
            region: 'us-east-1',
            userPoolId: 'us-east-1_urOMriqhw',
            userPoolClientId: '42fdlig5m5irtpt0bv24q9ve0o',
            authenticationFlowType: 'USER_PASSWORD_AUTH',
        }
    }
});