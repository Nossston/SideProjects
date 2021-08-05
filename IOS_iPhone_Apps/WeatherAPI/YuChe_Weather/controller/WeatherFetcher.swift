//
//  WeatherFetcher.swift
//  YuChe_Weather
//
//  Created by YUCHE LIU on 2021/4/7.
// KEY:
// cbc8dca0d86c400ab8753156210704LIVE
// https://github.com/Nossston/YuChe_Weather

import Foundation
class WeatherFetcher : ObservableObject{
    
    
    @Published var currentWeatherList = Weather()
    
    private static var shared : WeatherFetcher?
    
    static func getInstance() -> WeatherFetcher{
        if shared != nil{
            return shared!
        }else{
            return WeatherFetcher()
        }
    }
    
    func fetchDataFromAPI( cityName : String){
        let cityURL = "https://api.weatherapi.com/v1/current.json?key=cbc8dca0d86c400ab8753156210704&q=\(cityName)&aqi=no"
        guard let api = URL(string: cityURL  ) else{
            return
        }
        URLSession.shared.dataTask(with: api){(data: Data? , response : URLResponse?, error: Error?) in
                if let err = error{
                    print(#function, "Couldn't fetch data" ,err)
                }else{
                    DispatchQueue.global().async {
                        do{
                            if let jsonData = data{
                                let decoder = JSONDecoder()
                                let decodedList = try decoder.decode( Weather.self, from: jsonData)
                                DispatchQueue.main.async {
                                    self.currentWeatherList = decodedList
                                }
                            }else{
                                print(#function, "No JSON data received")
                            }
                        }catch let error{
                            print(#function, "error.....:", error)
                        }
                    }
                }
        }.resume()
    }
}
