import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {
  players = [{rank:1, name:"David De Gea", dateofBirth:"11/07/1990", age:31, nationality:"Spain"},
    {rank:2, name:"Alex Telles", dateofBirth:"04/12/1992", age:29, nationality:"Brazil"},
    {rank:3, name:"Bailly Eric", dateofBirth:"04/12/1994", age:27, nationality:"Ivory Coast"},
    {rank:4, name:"Diogo Dalot", dateofBirth:"03/18/1999", age:22, nationality:"Portugal"},
    {rank:5, name:"Jones Phil", dateofBirth:"02/21/1992", age:30, nationality:"England"},
    {rank:6, name:"Bruno Fernandes", dateofBirth:"09/08/1994", age:27, nationality:"Portugal"},
    {rank:7, name:"Fred", dateofBirth:"03/05/1993", age:29, nationality:"Brazil"},
    {rank:8, name:"Lingard Jesse", dateofBirth:"12/15/1992", age:29, nationality:"England"},
    {rank:9, name:"Pogba Paul", dateofBirth:"03/15/1993", age:28, nationality:"France"},
    {rank:10, name:"Cavani Edinson", dateofBirth:"02/14/1987", age:35, nationality:"Uruguay"},
    {rank:11, name:"Cristiano Ronaldo", dateofBirth:"02/05/1985", age:37, nationality:"Portugal"},
    {rank:12, name:"Elanga Anthony", dateofBirth:"04/27/2002", age:19, nationality:"Sweden"},
    {rank:13, name:"Greenwood Mason", dateofBirth:"10/01/2001", age:20, nationality:"England"},
    {rank:14, name:"Rashford Marcus", dateofBirth:"10/31/1997", age:24, nationality:"England"}];
  constructor() { }

  ngOnInit(): void {
  }

}
