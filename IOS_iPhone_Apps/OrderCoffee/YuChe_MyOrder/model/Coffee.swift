//
//  Coffee.swift
//  YuChe_MyOrder
//
//  Created by 劉宇哲 on 2021/2/17.
//

import Foundation
class Coffee {
    var type : String
    var size : String
    var quantity : Int
    
    init() {
        type = ""
        size = ""
        quantity = 0
    }
    init(type : String, size : String, quantity : Int) {
        self.size = size
        self.type = type
        self.quantity = quantity
    }
}

