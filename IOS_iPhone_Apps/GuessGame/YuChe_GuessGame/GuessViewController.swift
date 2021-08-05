//
//  GuessViewController.swift
//  YuChe_GuessGame
//
//  Created by YuChe Liu #134379189 on 2021/2/24.
//

import UIKit

class GuessViewController: UIViewController {
    @IBOutlet var lblNumber1 : UILabel!
    @IBOutlet var tfAnswer : UITextField!
    @IBOutlet var lblResult : UILabel!
    @IBOutlet var lbltotalAttemp : UILabel!
    
    
    var correctAnswer : Int = 0
    var totalAttemp : Int = 5
    
    var wontime :Int  = 0
    var losttime :Int  = 0
    var record = Record()

    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.title = "Guess Game"
        self.newPuzzle()
    }
    @objc func goToListScreen(){
        let storyboard = UIStoryboard(name: "Main", bundle: Bundle.main)
        let ScoreVC = storyboard.instantiateViewController(identifier: "ScoreVC") as! ScoreViewController
        ScoreVC.record = record
//        self.navigationController?.pushViewController(ListTVC, animated: true)
        self.navigationController?.pushViewController(ScoreVC, animated: true)
    }
    

    @IBAction func btnCheckAnswer(){
        var givenAnswer = 0
        var resultMessage : String?
        if(tfAnswer.text != nil){
            givenAnswer = Int(tfAnswer.text!) ?? 0
            if( self.correctAnswer > givenAnswer ){
                self.totalAttemp -= 1
                self.lblResult.text = "The answer is higher than your guess"
                self.lbltotalAttemp.text = "Your remain attemp is \(self.totalAttemp)"
            }
            if( self.correctAnswer < givenAnswer){
                self.totalAttemp -= 1
                self.lblResult.text = "The answer is lower than your guess "
                self.lbltotalAttemp.text = "Your remain attemp is \(self.totalAttemp)"
            }
            if self.correctAnswer == givenAnswer{
                
                // pass the times of won
                self.wontime += 1;
                record.won = "\(self.wontime)"
                
                let alert  = UIAlertController(title: "You Got this!!", message: resultMessage, preferredStyle: .alert)
                alert.addAction(UIAlertAction(title: "Go to ScoreBoard", style: .cancel , handler:{_ in
                    self.newPuzzle()
                    self.goToListScreen()
                }
                ) )
                alert.addAction(UIAlertAction(title: "I want to play again", style: .default , handler:{_ in
                                self.newPuzzle()
                } ) )
                self.present(alert, animated: true, completion: nil)
            }
        }
        if self.totalAttemp == 0 {
            self.losttime += 1;
            record.lost = "\(self.losttime)"
            resultMessage = "The correct answer is \(self.correctAnswer)"
            let alert  = UIAlertController(title: "Your didn't find it", message: resultMessage, preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "Go to ScoreBoard", style: .cancel , handler:{_ in
                self.newPuzzle()
                self.goToListScreen()
            }
            ) )
            alert.addAction(UIAlertAction(title: "I want to play again", style: .default , handler:{_ in
                            self.newPuzzle()
                        } ) )
            self.present(alert, animated: true, completion: nil)
        }

    }

    
    func newPuzzle(){
        self.tfAnswer.text = ""
        self.totalAttemp = 5
        self.correctAnswer = Int(arc4random_uniform(25)+1)
        print(self.correctAnswer)
        self.lbltotalAttemp.text = "Your remain attemp is \(self.totalAttemp)"
        self.lblResult.text = ""

    }
}
