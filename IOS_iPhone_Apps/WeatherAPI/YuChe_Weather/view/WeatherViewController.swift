//
//  WeatherViewController.swift
//  YuChe_Weather
//
//  Created by 劉宇哲 on 2021/4/7.
// https://github.com/Nossston/YuChe_Weather

import UIKit
import Combine

class WeatherViewController: UIViewController {
    
    
    // UI setting
    @IBOutlet var pkrCity : UIPickerView!
    @IBOutlet var lblTempC : UILabel!
    @IBOutlet var lblFeelTempC : UILabel!
    @IBOutlet var lblUV : UILabel!
    @IBOutlet var lblWind : UILabel!
    @IBOutlet var lblWind_dir : UILabel!

    private var cities = ["London", "Toronto", "Taipei", "Berlin", "Moscow", "Beijing", "Mumbai"]
    
    // Data
    private var currentList : Weather = Weather()
    private var weatherFetcher = WeatherFetcher.getInstance()
    private var cancellables: Set<AnyCancellable> = []

    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.pkrCity.dataSource = self
        self.pkrCity.delegate = self
//        self.weatherFetcher.fetchDataFromAPI()
        self.receiveChanges()
        
    }
    @IBAction func checkWeather(){
        let cityName = self.cities[self.pkrCity.selectedRow(inComponent: 0)]
//        self.lblTempC.text = "\(self.currentList[self.pkrCity.selectedRow(inComponent: 0)].currentTemp_c )"
        print(self.currentList)
        self.weatherFetcher.fetchDataFromAPI(cityName: cityName)

    }
    private func receiveChanges(){
        self.weatherFetcher.$currentWeatherList.receive(on: RunLoop.main)
            .sink{ (weather) in
                print(#function, "Received weather : ", weather)
//                self.currentList.removeAll()
//                self.currentList.append(contentsOf: weather)
//                self.reloadData()
                self.lblTempC.text = String(weather.currentTemp_c)
                self.lblWind.text = String(weather.currentWind_kph)
                self.lblFeelTempC.text = String(weather.currentFeelslike_c)
                self.lblUV.text = String(weather.currentUV)
                self.lblWind_dir.text = String(weather.currentWind_dir)

            }
            .store(in : &cancellables)
    }

}

extension WeatherViewController : UIPickerViewDelegate, UIPickerViewDataSource{
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1;
    }
    
    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        if (component==0) {
            return self.cities.count
        }
        return 0

    }
    func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        switch component {
        case 0:
            return self.cities[row]
        default:
            return ""
        }
    }
    
    func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        switch component {
        case 0:
            break
        default:
            break
        }
    }

    
}
