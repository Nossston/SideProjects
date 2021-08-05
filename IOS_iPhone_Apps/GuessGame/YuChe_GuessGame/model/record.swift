//
//  record.swift
//  YuChe_GuessGame
//
//  Created by YuChe Liu #134379189  on 2021/2/24.
//

import Foundation
struct Record {
    var won: String
    var lost: String
    
    
    init(){
        won = "0"
        lost = "0"
    }
    
    init(won : String , lost : String) {
        self.won = won
        self.lost = lost
    }
}
