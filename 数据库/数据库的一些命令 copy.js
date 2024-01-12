importClass("android.database.sqlite.SQLiteDatabase");
importClass("android.content.ContentValues");
importClass("android.content.Context");
importClass("android.database.Cursor");
//打开或创建test.db数据库
db = context.openOrCreateDatabase("test5.db", Context.MODE_PRIVATE, null);

//创建person表
db.execSQL(
  "create table if not exists " +
    "person" +
    "(_id integer primary key autoincrement,name,age)"
);

var person1 = new Object();
person1.name = "jt2n2";
person1.age = 30;
//ContentValues以键值对的形式存放数据
var cv = new ContentValues();
cv.put("name", person1.name);
cv.put("age", java.lang.Integer(35)); //插入ContentValues中的数据

db.insert("person", null, cv);
//  查询  c 是 Cursor类
var c = db.query("person", null, "age<38", null, null, null, null, null);
while (c.moveToNext()) {
  var _id = c.getInt(c.getColumnIndex("_id"));
  var name = c.getString(c.getColumnIndex("name"));
  var age = c.getInt(c.getColumnIndex("age"));
  toastLog("数据库 _id=" + _id + " name=" + name + " age=" + age);
}

//删除表数据  ok
//db.delete("person", null,null);

//ok. 删除表内容
// db.execSQL("DELETE FROM  person  WHERE age>32");

//关闭当前数据库
db.close();
