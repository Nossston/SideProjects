//
//  ListTableViewCell.swift
//  YuChe_MyOrder
//
//  Created by YuChe Liu on 2021/2/15.
//

import UIKit

class ListTableViewCell: UITableViewCell {

    @IBOutlet var lblType : UILabel!
    @IBOutlet var lblSize : UILabel!
    @IBOutlet var lblQuan : UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }
    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
}
