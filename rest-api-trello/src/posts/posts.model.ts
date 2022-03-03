import { ApiProperty } from "@nestjs/swagger";
import { INTEGER } from "sequelize";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { User } from "src/users/users.model";

interface PostCreationAttrs{
    title: string;
    content: string;
    comment: string;
    userId: number;
}
@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs >{
    @ApiProperty({example: '1', description: 'ID пользователя'})
    @Column({type: DataType.INTEGER, unique:true,autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'Great Title', description: 'title'})
    @Column({type: DataType.STRING, unique:true,allowNull:false})
    title: string;
    @ApiProperty({example: 'Just text', description: 'Content'})
    @Column({type: DataType.STRING,allowNull:false})
    content:string;
    @ApiProperty({example: 'Just text', description: 'Comment'})
    @Column({type: DataType.STRING,allowNull:false})
    comment:string;

    @ForeignKey( () => User)
    @Column({type: DataType.INTEGER})
    userId :number
    
    @BelongsTo( () => User)
    author: User
}
