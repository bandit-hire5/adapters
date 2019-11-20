import { PAGE_RESOURCE_OPERATIONS, RESOURCES } from "~src/configs/role-resources";
export declare type ResourceOperations = PAGE_RESOURCE_OPERATIONS;
export declare type UserPermission = {
    resource: RESOURCES;
    operations: ResourceOperations[];
};
