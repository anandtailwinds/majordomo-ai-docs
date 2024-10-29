/**
 * Majordomo AI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * User profile Information.
 */
export interface UserProfileInfo { 
    /**
     * Name of the workspace.
     */
    workspace: string;
    /**
     * Name of the user.
     */
    user_name: string;
    /**
     * The cost tags to be associated with this user operations.
     */
    cost_tags?: string;
    /**
     * The list of model profiles that are enabled for this user.
     */
    model_profiles?: Array<string>;
    /**
     * The list of VectorDB profiles that are enabled for this user.
     */
    vectordb_profiles?: Array<string>;
    /**
     * Timestamp of the user profile creation.
     */
    created_at: number;
    /**
     * Timestamp of the last update to the user profile.
     */
    last_update: number;
}

