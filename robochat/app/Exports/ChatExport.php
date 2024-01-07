<?php

namespace App\Exports;

use App\Models\Chat;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ChatExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return collect(Chat::getAllChats());
    }

    public function headings():array{
        return [
            'CHAT ID: ',
            'DATE AND TIME: ',
            'MESSAGE: ',
            'RESPONSE: ',
            'MESSAGE SENT BY USER: ',
            'ROBOCHAT THAT RESPONDED: '
        ];
    }
}