---
title: 【工具类】python实现表格数据批量处理
tags:
  - python
  - 表格处理
categories:
  - 好用工具类
keyword: 【工具类】python实现表格数据批量处理
description: 【工具类】python实现表格数据批量处理
cover: /pic/post/cover-excel.jpg
top_img: /pic/post/cover-excel.jpg
abbrlink: 1c8aced5
date: 2023-06-28 16:23:00
---

[封面图]

![封面图](../pic/post/cover-excel.jpg)

## python程序打包成exe可执行文件

```shell
pip install pyinstaller
pyinstaller --onefile your_script.py
```

## 账号和流水明细数据拆分

```python
# -*- coding: utf-8 -*-
import openpyxl
from openpyxl import Workbook

def main():
    try:
        print("=================银行流水自动拆分程序V1.0【吴第广】=================")
        print("=================开始=================")
        # 打开 Excel 文件
        try:
            workbook_user = openpyxl.load_workbook('账号.xlsx')
            workbook_detail = openpyxl.load_workbook('明细.xlsx')
        except FileNotFoundError:
            raise FileNotFoundError("账号.xlsx或明细.xlsx不存在")
            
        # 选择工作表
        worksheet_user = workbook_user.active
        worksheet_detail = workbook_detail.active

        user_data_dict = {}  # 创建一个字典用于存储数据
        exist_user_count = set()

        # 从第二行开始逐行读取数据
        for row in worksheet_user.iter_rows(min_row=2, values_only=True):  # min_row=2 表示从第二行开始读取
            name_column_user = row[0]  # 第一列数据
            card_column_user = row[2]  # 第三列数据
            bank_column_user = row[15]  # 第十六列数据
            user_card = card_column_user.replace("\t", "").replace(" ", "")
            exist_user_count.add(user_card)
            user_data_dict[user_card] = name_column_user + "-" + bank_column_user

        print("账户表中存在不同的卡号数量为：", len(exist_user_count))
        # print("账户表中存在不同的卡号为：", exist_user_count)

        my_detail_dict = {}

        exist_detail_card = set()

        header = [cell.value for cell in worksheet_detail[1]]
        now_row = 0
        for row in worksheet_detail.iter_rows(min_row=2, values_only=True):  # min_row=2 表示从第二行开始读取
            first_column_detail = row[0]
            first_column_detail = first_column_detail.replace("\t", "").replace(" ", "")
            now_row = now_row + 1
            if row not in exist_detail_card:
                exist_detail_card.add(first_column_detail)
            if now_row%10000 == 0:
                print("当前读取行数：", now_row)
                # 判断键是否存在
            if first_column_detail in my_detail_dict:
                # 键存在，向值（对象数组）中添加一条记录
                my_detail_dict[first_column_detail].append(row)
            else:
                # 键不存在，创建一个新的字典条目
                my_detail_dict[first_column_detail] = []
        # print(header)
        # print("用户卡号字典", user_data_dict)
        # print(my_detail_dict)
        print("【明细表中存在不同的卡号数量为】：", len(exist_detail_card))
        # print("明细表中存在不同的卡号为：", exist_detail_card)

        intersection_set = exist_user_count & exist_detail_card
        print("【有效卡号数为【：", len(intersection_set))
        print("【有效卡号为】：", intersection_set)

        first_exist_second_not_exist = exist_user_count - exist_detail_card
        print("【账号表中存在，明细表中不存在的卡号为】：", first_exist_second_not_exist)

        second_exist_first_not_exist = exist_detail_card - exist_user_count
        print("【明细表中存在，账号表中不存在的卡号为】：", second_exist_first_not_exist)

        for key, value in my_detail_dict.items():
            if key not in user_data_dict:
                print("账号表中不存在卡号：", key)
                continue
            name = user_data_dict[key]
            # 创建一个新的工作簿
            workbook = Workbook()

            # 创建一个工作表
            worksheet = workbook.active
            worksheet.append(header)
            for row in value:
                worksheet.append(row)
            new_name = name.replace("\t", "").replace(" ", "")
            card_no = key.replace("\t", "").replace(" ", "")
            workbook.save(new_name + "-" +  card_no[-4:] + ".xlsx")
            print("文档生成成功：", new_name + "-" +  card_no[-4:] + ".xlsx")

        my_detail_dict

        # 关闭 Excel 文件
        workbook_user.close()
        workbook_detail.close()
        print("=================完成=================")
        input("Press Enter to exit") 
    except Exception as e:
        # 异常处理逻辑
        print(f"An error occurred: {e}")
        input("Press Enter to exit") 

if __name__ == "__main__":
    main()
```

## CSV表格合并

```python
import os
import csv
import time

def main():
    try:
        print("=================多账号CSV文件合并程序V1.0【吴第广】=================")
        print("=================开始=================")
        start_time = time.time()
        # 获取当前目录下的所有CSV文件
        csv_files = [file for file in os.listdir() if file.endswith('.csv')]

        # 合并后的文件名称和表头
        output_file = '合并后的表格文件.csv'
        header_written = False
        common_header = None

        # 打开合并后的文件以写入数据
        with open(output_file, 'w', newline='') as merged_csv:
            writer = csv.writer(merged_csv)

            # 循环处理每个CSV文件
            for i, file in enumerate(csv_files):
                print(f"正在处理文件：{file}")
                with open(file, 'r') as csv_file:
                    reader = csv.reader(csv_file)
                    current_header = next(reader)

                    if i == 0:
                        common_header = current_header
                        writer.writerow(common_header)  # 写入第一个文件的表头
                        header_written = True
                    elif current_header != common_header:
                        print(f"错误：文件 {file} 的表头与其他文件不一致！")
                        raise SystemExit(1)

                    # 读取CSV文件的每一行数据
                    for row in reader:
                        writer.writerow(row)  # 写入非表头数据

        end_time = time.time()
        execution_time = end_time - start_time
        print(f"合并完成，结果保存在 {output_file} 文件中。")
        print(f"程序执行时间为：{execution_time:.2f} 秒")
        print("=================完成=================")
        input("Press Enter to exit") 
    except Exception as e:
        # 异常处理逻辑
        print(f"An error occurred: {e}")
        input("Press Enter to exit") 

if __name__ == "__main__":
    main()
```