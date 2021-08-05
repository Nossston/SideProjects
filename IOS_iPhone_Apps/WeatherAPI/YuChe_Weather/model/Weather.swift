//
//  Weather.swift
//  YuChe_Weather
//
//  Created by 劉宇哲 on 2021/4/7.
// https://github.com/Nossston/YuChe_Weather

import Foundation

struct Weather : Codable {
//    var location : String
//    var current : String
    
    var currentTemp_c : Double
    var currentFeelslike_c : Double
    var currentWind_kph : Double
    var currentUV : Double
    var currentWind_dir : String

    
    init() {
//        self.location = ""
//        self.current = ""
        self.currentTemp_c = 0
        self.currentUV = 0
        self.currentWind_kph = 0
        self.currentFeelslike_c = 0
        self.currentWind_dir = ""
    }
    
    enum CodingKeys: String, CodingKey {
        case location = "location"
        case current = "current"
        
        case currentTemp_c = "temp_c"
        case currentUV = "uv"
        case currentWind_kph = "wind_kph"
        case currentFeelslike_c = "feelslike_c"
        case currentWind_dir = "wind_dir"
    }
    
    
    func encode(to encoder: Encoder) throws {
        
    }
    
    init(from decoder: Decoder) throws {
        let response = try decoder.container(keyedBy: CodingKeys.self)
//        self.current = try response.decode(String.self, forKey: .current)
//        self.location = try response.decode(String.self, forKey: .location)
        let currentContainer = try response.decodeIfPresent( Current.self, forKey: .current)
        self.currentTemp_c = currentContainer?.temp_c ?? 999
        self.currentUV = currentContainer?.uv ?? 999
        self.currentWind_kph = currentContainer?.wind_kph ?? 999
        self.currentFeelslike_c = currentContainer?.feelslike_c ?? 9999
        self.currentWind_dir = currentContainer?.wind_dir ?? "Unavailable"
    }
}


struct Current : Codable {
    var temp_c : Double
    var feelslike_c : Double //Celsius
    var wind_kph : Double //kph
    var uv : Double
    var wind_dir : String
    
    enum CodingKeys: String, CodingKey {
        case temp_c = "temp_c"
        case feelslike_c = "feelslike_c"
        case wind_kph = "wind_kph"
        case uv = "uv"
        case wind_dir = "wind_dir"
    }
    
    init(from decoder: Decoder) throws {
        let response = try decoder.container(keyedBy: CodingKeys.self)
        self.temp_c = try response.decodeIfPresent(Double.self, forKey: .temp_c) ?? 9999
        self.feelslike_c = try response.decodeIfPresent(Double.self, forKey: .feelslike_c)  ?? 9999
        self.wind_kph = try response.decodeIfPresent(Double.self, forKey: .wind_kph)  ?? 9999
        self.uv = try response.decodeIfPresent(Double.self, forKey: .uv)  ?? 9999
        self.wind_dir = try response.decodeIfPresent(String.self, forKey: .wind_dir)  ?? "Unvailable"

    }
    
    func encode(to encoder: Encoder) throws {
        
    }
}
