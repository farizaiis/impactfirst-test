using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
namespace Fariz_database_test
{
    #region Items
    public class Items
    {
        #region Member Variables
        protected int _id;
        protected string _items_name;
        protected int _sellerId;
        #endregion
        #region Constructors
        public Items() { }
        public Items(string items_name, int sellerId)
        {
            this._items_name=items_name;
            this._sellerId=sellerId;
        }
        #endregion
        #region Public Properties
        public virtual int Id
        {
            get {return _id;}
            set {_id=value;}
        }
        public virtual string Items_name
        {
            get {return _items_name;}
            set {_items_name=value;}
        }
        public virtual int SellerId
        {
            get {return _sellerId;}
            set {_sellerId=value;}
        }
        #endregion
    }
    #endregion
}