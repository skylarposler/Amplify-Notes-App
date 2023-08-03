export type AmplifyDependentResourcesAttributes = {
  "api": {
    "NotesApp": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "NotesApp": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "storage": {
    "s3notesappimgs": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}