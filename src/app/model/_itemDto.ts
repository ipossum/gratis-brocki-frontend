/**
 * GratisBrockiBackend API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: @springdoc.version@
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { MessageDto } from './messageDto';
import { PictureDto } from './pictureDto';

export interface ItemDto { 
    id?: number;
    title?: string;
    description?: string;
    zipCode?: number;
    category?: ItemDto.CategoryEnum;
    condition?: ItemDto.ConditionEnum;
    userId?: number;
    pictures?: Array<PictureDto>;
    messages?: Array<MessageDto>;
}
export namespace ItemDto {
    export type CategoryEnum = 'ChildrenItemCategory' | 'ClothingItemCategory' | 'GardenItemCategory' | 'HouseholdItemCategory' | 'SportItemCategory' | 'VehicleItemCategory' | 'OtherItemCategory';
    export const CategoryEnum = {
        ChildrenItemCategory: 'ChildrenItemCategory' as CategoryEnum,
        ClothingItemCategory: 'ClothingItemCategory' as CategoryEnum,
        GardenItemCategory: 'GardenItemCategory' as CategoryEnum,
        HouseholdItemCategory: 'HouseholdItemCategory' as CategoryEnum,
        SportItemCategory: 'SportItemCategory' as CategoryEnum,
        VehicleItemCategory: 'VehicleItemCategory' as CategoryEnum,
        OtherItemCategory: 'OtherItemCategory' as CategoryEnum
    };
    export type ConditionEnum = 'USED' | 'NEW' | 'DEFECTIVE';
    export const ConditionEnum = {
        USED: 'USED' as ConditionEnum,
        NEW: 'NEW' as ConditionEnum,
        DEFECTIVE: 'DEFECTIVE' as ConditionEnum
    };
}